import {CronJob} from 'cron';

class Poller {

    cronJob: CronJob;

    constructor() {

        this.cronJob = new CronJob('*/5 * * * * *', async () => {
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

        // Publish Outboxes's payload to Kafka topic (name)

        // Update Outboxes status to "dispatched"


    }
}

let foo = new Poller();
