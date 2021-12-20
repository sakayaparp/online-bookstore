import {UniqueEntityID} from "../../../share/domain/unique-entity-id";
import {Cart} from "../cart";

interface CartRepoInterface {
    getCartById: (id: UniqueEntityID) => Promise<any>;
    save: (data: any) => Promise<any>;
}

interface ItemRepoInterface {
    getItemById: (id: UniqueEntityID) => Promise<any>;
}

interface deductItemDTO {
    cartId: UniqueEntityID,
    itemId: UniqueEntityID
}

export class deductItem {
    private cartRepo: CartRepoInterface;
    private itemRepo: ItemRepoInterface;

    constructor(cartRepo: CartRepoInterface, itemRepo: ItemRepoInterface) {
        this.cartRepo = cartRepo;
        this.itemRepo = itemRepo
    }

    public async execute(request: deductItemDTO) {
        const {cartId, itemId} = request;
        const item = await this.itemRepo.getItemById(itemId);
        let cart: Cart;

        try {
            cart = await this.cartRepo.getCartById(cartId);
        } catch(err) {
            throw new Error("Cart not found.")
        }
        const updatedCart = cart.deductItem(item)
        await this.cartRepo.save(updatedCart);
    }
}