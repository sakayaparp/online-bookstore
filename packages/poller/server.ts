import {CronJob} from 'cron';
import {outboxRepo} from './domain/infra/database'

class Poller {

    cronJob: CronJob;

    constructor() {

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
        // Do some task
        console.log(Date.now())

        // Query Created Outboxes from Inventories DB
        let events = await outboxRepo.get()
        console.log(events)

        if(events.length > 0) {
            // Publish Outboxes's payload to Kafka topic (name)
            
            // Update Outboxes status to "dispatched"
            outboxRepo.updateStatus(events)
        } else {
            console.log('no new event')
        }
    }
}

let foo = new Poller();
