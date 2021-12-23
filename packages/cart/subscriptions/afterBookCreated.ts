import { CreateItemUseCase } from "../useCases/createItem/CreateItemUseCase";
import { CreateItemDTO } from "../useCases/createItem/CreateItemDTO";
import { KafkaServiceImpl } from "../infra/kafka/KafkaServiceImpl";

export class AfterBookCreated {
  private createItem: CreateItemUseCase;
  private kafka: KafkaServiceImpl;

  constructor(usecase: CreateItemUseCase, kafka: KafkaServiceImpl) {
    // TODO: use CreateBookUseCase instead
    this.createItem = usecase;
    this.kafka = kafka;
    this.setUpSupsctiptions();
  }

  public setUpSupsctiptions() {
    this.kafka.establishConnection();
    this.kafka.consumeMessages('outbox.inventory', (topic, partition, message) => {
      this.onItemCreated(message.value)
    });
  }

  async onItemCreated(event: any): Promise<void> {
    let object = JSON.parse(event.toString())
    let payload = JSON.parse(object.payload)
    
    const detail: CreateItemDTO = {
      name: payload.props.title,
      amount: payload.props.amount,
      price: payload.props.price,
    };

    await this.createItem.execute(detail, payload._id);
  }
}
