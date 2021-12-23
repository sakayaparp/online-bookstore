export interface IKafkaService {
    establishConnection()
    consumeMessages(topic: string, handler: Function)
}


