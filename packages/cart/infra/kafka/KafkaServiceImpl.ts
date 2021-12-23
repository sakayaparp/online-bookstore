import { IKafkaService } from "./IKafkaService";
import {Kafka, KafkaConfig} from "kafkajs";

export class KafkaServiceImpl implements IKafkaService {
    private client: Kafka;
    public readonly config: KafkaConfig;

    constructor(kafkaConfig: KafkaConfig) {
        this.config = kafkaConfig;
    }

    establishConnection() {
        this.client = new Kafka({
            clientId: 'poller',
            brokers: ['localhost:9092']
        });
    }

    async consumeMessages(topic: string, handler: Function): Promise<any> {
        const consumer = this.client.consumer({ groupId: 'jame-group' })

        await consumer.connect()
        await consumer.subscribe({ topic: topic })
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
               handler(topic, partition, message)
            },
        })
    }
}