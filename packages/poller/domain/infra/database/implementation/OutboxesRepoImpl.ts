import {IDomainEvent} from "../../../../../share/domain/events/IDomainEvents";
import {OutboxesRepo} from "../outboxesRepo";

export class OutboxesRepoImpl implements OutboxesRepo {
    get(data: IDomainEvent<any>): Promise<any> {
        return Promise.resolve(undefined);
    }
}
