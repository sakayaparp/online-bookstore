import {AggregateRoot} from '../../share/domain/aggregate-root';
import {UniqueEntityID} from '../../share/domain/unique-entity-id';
import {DomainEvent} from '../../share/domain/events/domain-events';
import {Item} from './items/item';

export type CartProps = {
    readonly items: Item[];
    readonly grandTotalPrice: number;
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
                    items: this.props.items.slice(0, indexItem).concat([updatedItem], this.props.items.slice(indexItem + 1)),
                    grandTotalPrice: this.props.grandTotalPrice
                },
                this.domainEvents,
                this.id
            )
        } else {
            return new Cart(
                {
                    items: [...this.props.items, item],
                    grandTotalPrice: this.props.grandTotalPrice
                },
                this.domainEvents,
                this.id
            )
        }
    }

    public deductItem = (item: Item): Cart => {
        const updatedItem = item.decreaseAmount();
        const indexItem = this.props.items.indexOf(item);
        if (updatedItem.amount !== 0) {
            return new Cart(
                {
                    items: this.props.items.slice(0, indexItem).concat([updatedItem], this.props.items.slice(indexItem + 1)),
                    grandTotalPrice: this.props.grandTotalPrice
                },
                this.domainEvents,
                this.id
            )
        } else {
            return this.removeItem(item.itemId)
        }
    }

    public removeItem = (itemId: UniqueEntityID): Cart => {
        const itemIndex = this.props.items.findIndex(item => item.itemId === itemId);
        this.props.items.splice(itemIndex, 1);

        return new Cart(
            {
                items: this.props.items,
                grandTotalPrice: this.props.grandTotalPrice
            },
            this.domainEvents,
            this.id
        )
    }

    public clearCart() {
        return new Cart(
            {
                items: [],
                grandTotalPrice: this.props.grandTotalPrice
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
        gradTotalPrice: number,
        existingId?: UniqueEntityID,
    ): Cart => {
        const generatedId = new UniqueEntityID();
        const id = existingId || generatedId;
        return new Cart({items: items, grandTotalPrice: gradTotalPrice}, [], id);
    }
}