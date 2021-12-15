import {UniqueEntityID} from "../../../share/domain/unique-entity-id";
import {Cart} from "../cart";

interface CartRepoInterface {
    getCartById: (id: UniqueEntityID) => Promise<any>;
    save: (data: any) => Promise<any>;
}

interface RemoveItemDTO {
    cartId: UniqueEntityID,
    itemId: UniqueEntityID
}

export class RemoveItem {
    private cartRepo: CartRepoInterface;

    constructor(cartRepo: CartRepoInterface) {
        this.cartRepo = cartRepo;
    }

    public async execute(request: RemoveItemDTO) {
        const {cartId, itemId} = request;
        let cart: Cart;

        try {
            cart = await this.cartRepo.getCartById(cartId);
        } catch(err) {
            throw new Error("Cart not found.")
        }

        const updatedCart = cart.removeItem(itemId)
        await this.cartRepo.save(updatedCart);
    }
}