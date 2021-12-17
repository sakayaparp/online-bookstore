import { AggregateRoot } from "../aggregate-root";
import { UniqueEntityID } from "../unique-entity-id";

export type Status = 'CREATED' | 'DISPATCHED'
export interface IDomainEvent<T extends AggregateRoot<any>> {
  aggregateId: UniqueEntityID;
  dateTimeOccurred: Date;
  name: string;
  aggregateType: string
  payload: T,
  status: Status
}
