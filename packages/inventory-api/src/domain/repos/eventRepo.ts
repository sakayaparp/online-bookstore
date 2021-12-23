import {IDomainEvent} from "../../../../share/domain/events/IDomainEvents";


export interface IEventRepo {
    save: (data: IDomainEvent<any>) => Promise<any>;
}
