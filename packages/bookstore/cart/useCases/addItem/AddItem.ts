import {Cart} from "../../cart";
import {AddItemDTO} from "./AddItemDTO"
import {IItemRepo} from "../../repos/itemRepo";
import {ICartRepo} from "../../repos/cartRepo";

export class AddItem {
    private cartRepo: ICartRepo;
    private itemRepo: IItemRepo;

    constructor(cartRepo: ICartRepo, itemRepo: IItemRepo) {
        this.cartRepo = cartRepo;
        this.itemRepo = itemRepo;
    }

    public async execute(request: AddItemDTO) {
        const {cartId, itemId} = request;
        const item = await this.itemRepo.getItemById(itemId);

        if (item === undefined) {
            throw new Error("Item not found");
        }

        let cart: Cart;

        // get item detail from book
        // add check stock
        // amount define

        cart = await this.cartRepo.getCartById(cartId);

        if (cart === undefined) {
            cart = Cart.create([])
        }

        const updatedCart = cart.addItem(item)
        console.log("CART", cart)
        await this.cartRepo.save(updatedCart);

        return updatedCart;
    }
}