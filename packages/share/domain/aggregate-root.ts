import { Entity } from "./entity";
import { DomainEvent } from "./events/domain-events";
import { UniqueEntityID } from "./unique-entity-id";

export abstract class AggregateRoot<T> extends Entity<T> {
  protected readonly _domainEvents: DomainEvent[];

  protected constructor(
    props: T,
    domainEvents: DomainEvent[] = [],
    id?: UniqueEntityID
  ) {
    super(props, id);
    this._domainEvents = domainEvents;
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }
}
