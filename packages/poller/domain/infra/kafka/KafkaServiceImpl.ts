import {KafkaService} from "./KafkaService";
import {CompressionTypes, Kafka, KafkaConfig, Message, ProducerRecord} from "kafkajs";

export class KafkaServiceImpl implements KafkaService {
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

    async produceMessages(events: [], topic: string) {
        let producer = this.client.producer(
            {
                allowAutoTopicCreation: true,
                idempotent: true
            });

        const messages = events.map(event => {
            const message: Message = {
                value: JSON.stringify(event)
            }
            return message;
        });
        const record = KafkaServiceImpl.buildProducerRecord(topic, messages);

        // TODO: implement transactional producer https://kafka.js.org/docs/transactions
        await producer.connect();
        const recordMetadata = await producer.send(record);
        console.log('successfully produce messages to topic, and received meta: ', recordMetadata);
        await producer.disconnect();
    }

    private static buildProducerRecord(topic: string, messages: Message[]) {
        const record: ProducerRecord = {
            topic: topic,
            compression: CompressionTypes.None,
            timeout: 3000,
            messages: messages
        }
        return record;
    }
}


