import {UniqueEntityID} from "../../../share/domain/unique-entity-id";
import {Cart} from "../cart";

interface CartRepoInterface {
    getCartById: (id: UniqueEntityID) => Promise<any>;
    save: (data: any) => Promise<any>;
}

interface ItemRepoInterface {
    getItemById: (id: UniqueEntityID) => Promise<any>;
}

interface AddItemDTO {
    cartId: UniqueEntityID,
    itemId: UniqueEntityID
}

export class AddItem {
    private cartRepo: CartRepoInterface;
    private itemRepo: ItemRepoInterface;

    constructor(cartRepo: CartRepoInterface, itemRepo: ItemRepoInterface) {
        this.cartRepo = cartRepo;
        this.itemRepo = itemRepo;
    }

    public async execute(request: AddItemDTO) {
        const {cartId, itemId} = request;
        const item = await this.itemRepo.getItemById(itemId);
        let cart: Cart;

        // get item detail from book
        // add check stock
        // amount define

        try {
            cart = await this.cartRepo.getCartById(cartId);
        } catch(err) {
            cart = Cart.create([])
        }

        const updatedCart = cart.addItem(item)
        await this.cartRepo.save(updatedCart);
    }
}