import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";
import {Cart} from "../../cart";
import {AddItemDTO} from "./AddItemDTO"
import {ItemRepo} from "../../repos/itemRepo";
import {CartRepo} from "../../repos/cartRepo";

export class AddItem {
    private cartRepo: CartRepo;
    private itemRepo: ItemRepo;

    constructor(cartRepo: CartRepo, itemRepo: ItemRepo) {
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

        return updatedCart;
    }
}