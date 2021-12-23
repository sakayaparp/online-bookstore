import {AggregateRoot} from "../aggregate-root";


export type Status = 'CREATED' | 'DISPATCHED'
export interface IDomainEvent<T extends AggregateRoot<any>> {
  aggregateId: string;
  name: string;
  aggregateType: string
  payload: string,
  status: Status
  type: string
}
