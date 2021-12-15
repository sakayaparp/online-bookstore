import {AggregateRoot} from '../../share/domain/aggregate-root';
import {UniqueEntityID} from '../../share/domain/unique-entity-id';
import {DomainEvent} from '../../share/domain/events/domain-events';
import {Item} from './items/item';

export type CartProps = {
    readonly items: Item[];
}

export class Cart extends AggregateRoot<CartProps> {
    private constructor(
        props: CartProps,
        domainEvents: DomainEvent[],
        id?: UniqueEntityID,
    ) {
        super(props, domainEvents, id);
    }

    public addItem = (item: Item): Cart => {
        if (this.hasItem(item.itemId)) {
            const updatedItem = item.increaseAmount();
            const indexItem = this.props.items.indexOf(item);

            return new Cart(
                {
                    items: this.props.items.slice(0, indexItem).concat([updatedItem], this.props.items.slice(indexItem + 1))
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

    public removeItem = (itemId: UniqueEntityID): Cart => {
        const itemIndex = this.props.items.findIndex(item => item.itemId === itemId);
        this.props.items.splice(itemIndex, 1);

        return new Cart(
            {
                items: this.props.items
            },
            this.domainEvents,
            this.id
        )
    }

    public getItem(itemId: UniqueEntityID) {
        return this.props.items.find(i => i.itemId === itemId)
    }

    public hasItem(itemId: UniqueEntityID): boolean {
        return this.props.items.find(i => i.itemId === itemId) !== undefined
    }

    public get size() {
        return this.props.items.length
    }

    static create = (
        items: Item[],
        existingId?: UniqueEntityID,
    ): Cart => {
        const generatedId = new UniqueEntityID();
        const id = existingId || generatedId;
        return new Cart({items: items}, [], id);
    }
}