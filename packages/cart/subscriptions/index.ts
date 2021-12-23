import {AfterBookCreated} from "./afterBookCreated"
import {createItemUseCase} from "../useCases/createItem"

import { KafkaServiceImpl } from '../infra/kafka/KafkaServiceImpl'

const kafka = new KafkaServiceImpl({
    clientId: 'poller',
    brokers: ['localhost:9092']
})

new AfterBookCreated(createItemUseCase, kafka)