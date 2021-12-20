import {Cart} from "../../cart";
import {AddItemDTO} from "./AddItemDTO"
import {IItemRepo} from "../../repos/itemRepo";
import {ICartRepo} from "../../repos/cartRepo";
import { Item, ItemProps } from "../../items/item";

export class AddItem {
    private cartRepo: ICartRepo;
    private itemRepo: IItemRepo;

    constructor(cartRepo: ICartRepo, itemRepo: IItemRepo) {
        this.cartRepo = cartRepo;
        this.itemRepo = itemRepo;
    }

    public async execute(request: AddItemDTO) {
        const {cartId, itemId} = request;
        const item = await this.itemRepo.getItemById(itemId); // TODO: use bookRepo instead to verify amout and existing

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

        let tmpItem = cart.props.items.find(v => v.itemId.equals(itemId))
        let updatedCart;
        if(tmpItem) {
            if(tmpItem.amount >= item.amount) {
                throw new Error("Item not enough");
            }
            updatedCart = cart.addItem(tmpItem)
        } else {
            // TODO: improve
            // TODO: use item instead book
            let itemProp: ItemProps = {
                name: item.props.name,
                amount: 1,
                price: item.props.price,
            }
            let newItem = Item.create(itemProp, item.itemId)
            updatedCart = cart.addItem(newItem)
        }

        await this.cartRepo.save(updatedCart);

        return updatedCart;
    }
}