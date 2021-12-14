import { UniqueEntityID } from "../unique-entity-id";

export interface DomainEvent {
  getAggregateId(): UniqueEntityID;
  dateTimeOccurred: Date;
}
