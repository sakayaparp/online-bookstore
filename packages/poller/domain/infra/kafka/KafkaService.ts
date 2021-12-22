export interface KafkaService {
    establishConnection()
    produceMessages(events: [], topic: string)
}


