import { Cart } from "../cart";
import { DomainEvents } from "../../../share/domain/events/DomainEvents";
import { UniqueEntityID } from "../../../share/domain/unique-entity-id";

export class OrderCreated implements DomainEvents {
    public dateTimeOccurred: Date;
    public cart: Cart;

    constructor (cart: Cart) {
        this.dateTimeOccurred = new Date();
        this.cart = cart;
    }

    getAggregateId (): UniqueEntityID {
        return this.cart.id;
    }
}