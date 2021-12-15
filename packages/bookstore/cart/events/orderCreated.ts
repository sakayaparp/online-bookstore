import { Cart } from "../cart";
import { DomainEvent } from "../../../share/domain/events/domain-events";
import { UniqueEntityID } from "../../../share/domain/unique-entity-id";

export class OrderCreated implements DomainEvent {
    private readonly _dateTimeOccurred: Date;
    private readonly _cart: Cart;

    constructor (cart: Cart) {
        this._dateTimeOccurred = new Date();
        this._cart = cart;
    }

    getAggregateId (): UniqueEntityID {
        return this._cart.id;
    }

    get dateTimeOccurred() {
        return this._dateTimeOccurred;
    }
}