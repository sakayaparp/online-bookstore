import { AggregateRoot } from "../aggregate-root";
import { UniqueEntityID } from "../unique-entity-id";

export type Status = 'CREATED' | 'DISPATCHED'
export interface IDomainEvent<T extends AggregateRoot<any>> {
  aggregateId: string;
  name: string;
  aggregateType: string
  payload: string,
  status: Status
  type: string
}
