import {AggregateRoot} from '../../share/domain/aggregate-root';
import {UniqueEntityID} from '../../share/domain/unique-entity-id';
import {IDomainEvent} from '../../share/domain/events/IDomainEvent';
import {Item} from './items/item';
import * as _ from 'lodash';

export type CartProps = {
    readonly items: Item[];
    readonly grandTotalPrice: number;
}

export class Cart extends AggregateRoot<CartProps> {
    private constructor(
        props: CartProps,
        domainEvents: IDomainEvent[],
        id?: UniqueEntityID,
    ) {
        super(props, domainEvents, id);
    }

    public addItem = (item: Item): Cart => {
        let updatedItems = [];
        if (this.hasItem(item.itemId)) {
            const updatedItem = item.increaseAmount();
            const indexItem = this.props.items.indexOf(item);
            updatedItems = this.props.items.slice(0, indexItem).concat([updatedItem], this.props.items.slice(indexItem + 1));
        } else {
            updatedItems = [...this.props.items, item];
        }
        return new Cart(
            {
                items: updatedItems,
                grandTotalPrice: this.props.grandTotalPrice
            },
            this.domainEvents,
            this.id
        )
    }

    public deductItem = (item: Item): Cart => {
        const updatedItem = item.decreaseAmount();
        const indexItem = this.props.items.indexOf(item);
        if (updatedItem.amount !== 0) {
            const updatedItems = this.props.items.slice(0, indexItem).concat([updatedItem], this.props.items.slice(indexItem + 1));
            return new Cart(
                {
                    items: updatedItems,
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

    private calculateGrandTotalPrice(): number {
        return _.sumBy(this.props.items, (item) => item.totalPrice)
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

    public get grandTotalPrice() {
        return this.calculateGrandTotalPrice()
    }

    static create = (
        items: Item[],
        existingGrandTotalPrice?: number,
        existingId?: UniqueEntityID,
    ): Cart => {
        const generatedId = new UniqueEntityID();
        const id = existingId || generatedId;
        const grandTotalPrice = existingGrandTotalPrice || 0;
        return new Cart({items: items, grandTotalPrice: grandTotalPrice}, [], id);
    }
}