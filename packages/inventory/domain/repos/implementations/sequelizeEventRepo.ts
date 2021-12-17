import { IDomainEvent } from "../../../../share/domain/events/IDomainEvents";
import { Outbox, OutboxProps } from "../../outbox";
import { IEventRepo } from "../eventRepo";

export class SequelizeEventRepo implements IEventRepo {
    public outboxes: IDomainEvent<any>[] = []

    async save(data: IDomainEvent<any>): Promise<any> {
        this.outboxes.push(data)
        console.log("DEBUG OUTBOX: ",this.outboxes)
    }
}