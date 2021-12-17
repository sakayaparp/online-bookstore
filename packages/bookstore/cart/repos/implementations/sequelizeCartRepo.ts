import {ICartRepo} from "../cartRepo";
import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";
import {Item} from "../../items/item"

export class SequelizeCartRepo implements ICartRepo {
    public cart: Item[] = [];

    public async save(data: any): Promise<void> {
        console.log("data", data)
        this.cart.push(data)
    }

    public async getCartById(cartId: UniqueEntityID): Promise<void> {

    }
}