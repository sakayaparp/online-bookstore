import {AggregateRoot} from '../../share/domain/aggregate-root';
import {UniqueEntityID} from '../../share/domain/unique-entity-id';
import {DomainEvent} from '../../share/domain/events/domain-events';
import {Item} from './items/item';

export type CartProps = {
    readonly items: Item[];
}

export class Cart extends AggregateRoot<CartProps> {
    public constructor(
        props: CartProps,
        domainEvents: DomainEvent[],
        id?: UniqueEntityID,
    ) {
        super(props, domainEvents, id);
    }

    public addItem = (item: Item): Cart => {
        if (this.getItem(item.itemId) !== undefined) {
            const updatedItem = item.updateAmount();
            const otherItems = this.props.items.filter(i => i.itemId !== item.itemId);
            return new Cart(
                {
                    items: [...otherItems, updatedItem]
                },
                this.domainEvents,
                this.id
            )
        } else {
            return new Cart(
                {
                    items: [...this.props.items, item]
                },
                this.domainEvents,
                this.id
            )
        }
    }

    public getItem(itemId: UniqueEntityID) {
        return this.props.items.find(i => i.itemId === itemId)
    }

    public get size() {
        return this.props.items.length
    }
}