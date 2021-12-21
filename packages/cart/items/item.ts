import {Entity} from '../../share/domain/entity';
import {UniqueEntityID} from '../../share/domain/unique-entity-id';

export type ItemProps = {
    readonly name: string;
    amount: number;
    readonly price: number;
}

export class Item extends Entity<ItemProps> {
    private constructor(
        props: ItemProps,
        id?: UniqueEntityID,
    ) {
        super(props, id);
    }

    public get itemId(): UniqueEntityID {
        return this._id;
    }

    private calculateTotalPrice = (): number => {
        return this.props.amount * this.props.price
    }

    public increaseAmount = (): Item => {
        return new Item({
                name: this.props.name,
                amount: this.props.amount + 1,
                price: this.props.price
            },
            this._id)
    }

    public decreaseAmount = (): Item => {
        return new Item({
                name: this.props.name,
                amount: this.props.amount - 1,
                price: this.props.price
            },
            this._id)
    }

    public get amount() {
        return this.props.amount
    }

    public set amount(amount: number) {
        this.props.amount = amount
    }

    public get totalPrice() {
        return this.calculateTotalPrice()
    }

    static create = (
        props: ItemProps,
        existingId?: UniqueEntityID,
    ): Item => {
        const generatedId = new UniqueEntityID();
        const id = existingId || generatedId;
        return new Item(props, id);
    }
}