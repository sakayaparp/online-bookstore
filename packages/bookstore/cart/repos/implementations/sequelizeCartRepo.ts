import {ICartRepo} from "../cartRepo";
import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";
import {Cart} from "../../cart"

export class SequelizeCartRepo implements ICartRepo {
    public carts: Cart[] = [];

    public async save(data: any): Promise<void> {        
        const itemIndex = this.carts.findIndex(cart => cart.id.equals(data.id));
        this.carts.splice(itemIndex, 1);
        this.carts.push(data)
    }

    public async getCartById(cartId: UniqueEntityID): Promise<Cart | undefined> {
        let cart: Cart;
        cart = this.carts.find(v => {
            if (v.id.equals(cartId)) {
                return v
            }
        })
        return cart
    }
}