import { IDomainEvent } from "../../../../../share/domain/events/IDomainEvents";
import { Event, EventProps } from "../../event";
import { IEventRepo } from "../eventRepo";

export class SequelizeEventRepo implements IEventRepo {
  public events: IDomainEvent<any>[] = [];

  async save(data: IDomainEvent<any>): Promise<any> {
    this.events.push(data);
  }
}
