import {IDomainEvent} from "../../../../share/domain/events/IDomainEvents";

export interface OutboxesRepo {
    get: (data: IDomainEvent<any>) => Promise<any>;
}

