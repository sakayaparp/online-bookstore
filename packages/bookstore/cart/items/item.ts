import {Entity} from '../../../share/domain/entity';
import {UniqueEntityID} from '../../../share/domain/unique-entity-id';

export type ItemProps = {
    readonly name: string;
    readonly amount: number;
    readonly price: number;
}

export class Item extends Entity<ItemProps> {
    private constructor(
        props: ItemProps,
        id?: UniqueEntityID,
    ) {
        super(props, id);
    }

    public get itemId() {
        return this._id;
    }

    public totalPrice = (): number => {
        return this.props.amount * this.props.price
    }

    public updateAmount = (): Item => {
        return new Item({
                name: this.props.name,
                amount: this.props.amount + 1,
                price: this.props.price
            },
            this._id)
    }

    public get amount() {
        return this.props.amount
    }

    static create = (
        name: string,
        amount: number,
        price: number,
        existingId?: UniqueEntityID,
    ): Item => {
        const generatedId = new UniqueEntityID();
        const id = existingId || generatedId;
        return new Item({name: name, amount: amount, price: price}, id);
    }
}