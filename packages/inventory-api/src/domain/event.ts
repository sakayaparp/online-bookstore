import {UniqueEntityID} from "../../../share/domain/unique-entity-id";

export interface EventProps {
    eventName: string;
    aggregateId: UniqueEntityID;
    aggregateType: string;
    payload: string;
    status: string;
}

export class Event {
    private props: EventProps;
    private _id: UniqueEntityID;

    private constructor (props: EventProps) {
        this.props = props;
        this._id = new UniqueEntityID();
    }

    get aggregateId(): UniqueEntityID {
        return this.props.aggregateId;
    }

    get aggregateType() : string {
        return this.props.aggregateType;
    }

    get payload() : string {
        return this.props.payload;
    }

    get status() : string {
        return this.props.status;
    }

    get id(): UniqueEntityID {
        return this._id;
    }

    get eventName(): string {
        return this.props.eventName;
    }

    public static create(event: EventProps) {
        return new Event(event)
    }
}
