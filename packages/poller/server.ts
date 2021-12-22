import {CronJob} from 'cron';
import {outboxRepo} from './domain/infra/database'
import {KafkaServiceImpl} from "./domain/infra/kafka/KafkaServiceImpl";
import {KafkaService} from "./domain/infra/kafka/KafkaService";

class Poller {

    cronJob: CronJob;
    public readonly kafkaService: KafkaService;

    constructor(kafkaService: KafkaService) {
        this.kafkaService = kafkaService;
        this.cronJob = new CronJob('*/10 * * * * *', async () => {
            try {
                await this.doTask();
            } catch (e) {
                console.error(e);
            }
        });

        // Start job
        if (!this.cronJob.running) {
            this.cronJob.start();
        }
    }

    async doTask(): Promise<void> {
        console.log('start poller execution: ', Date.now())

        // Query Created Outboxes from Inventories DB
        let events: [] = await outboxRepo.get()
        console.log(events)

        if (events.length > 0) {
            // Publish Outboxes's payload to Kafka topic (name)
            const topic = "outbox.inventory";
            await kafkaService.produceMessages(events, topic);

            // Update Outboxes status to "dispatched"
            await outboxRepo.updateStatus(events)
        } else {
            console.log('no new event')
        }
    }
}

const kafkaService = new KafkaServiceImpl({
    clientId: 'poller',
    brokers: ['localhost:9092']
});

const foo = new Poller(kafkaService);
kafkaService.establishConnection();
