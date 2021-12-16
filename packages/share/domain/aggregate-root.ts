import { Entity } from "./entity";
import { IDomainEvent } from "./events/IDomainEvents";
import { UniqueEntityID } from "./unique-entity-id";

export abstract class AggregateRoot<T> extends Entity<T> {
  protected readonly _domainEvents: IDomainEvent[];

  protected constructor(
    props: T,
    domainEvents: IDomainEvent[] = [],
    id?: UniqueEntityID
  ) {
    super(props, id);
    this._domainEvents = domainEvents;
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  get domainEvents(): IDomainEvent[] {
    return this._domainEvents;
  }
}
