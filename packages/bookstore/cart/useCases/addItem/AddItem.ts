import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";
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