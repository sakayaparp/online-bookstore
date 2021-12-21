import {UniqueEntityID} from "../../../share/domain/unique-entity-id";
import {Cart} from "../cart";

interface CartRepoInterface {
    getCartById: (id: UniqueEntityID) => Promise<any>;
    save: (data: any) => Promise<any>;
}

interface clearCartDTO {
    cartId: UniqueEntityID
}

export class clearCart {
    private cartRepo: CartRepoInterface;

    constructor(cartRepo: CartRepoInterface) {
        this.cartRepo = cartRepo;
    }

    public async execute(request: clearCartDTO) {
        const {cartId} = request;
        let cart: Cart;
        cart = await this.cartRepo.getCartById(cartId);

        const clearedCart = cart.clearCart()
        await this.cartRepo.save(clearedCart);
    }
}