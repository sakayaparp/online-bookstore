import { Outbox, OutboxProps } from "../../outbox";
import { IOutboxRepo } from "../outboxRepo";

export class SequelizeOutboxRepo implements IOutboxRepo {
    public outboxes: Outbox[] = []

    async save(data: Outbox): Promise<any> {
        this.outboxes.push(data)
        console.log(this.outboxes)
    }
}