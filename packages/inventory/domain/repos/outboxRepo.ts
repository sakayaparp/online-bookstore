import { Outbox } from "../outbox";

export interface IOutboxRepo {
    save: (data: Outbox) => Promise<any>;
}