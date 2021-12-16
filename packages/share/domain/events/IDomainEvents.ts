import { UniqueEntityID } from "../unique-entity-id";

export interface IDomainEvent {
  getAggregateId(): UniqueEntityID;
  dateTimeOccurred: Date;
}
