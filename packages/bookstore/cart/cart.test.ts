import {Cart} from './cart'
import {UniqueEntityID} from "../../share/domain/unique-entity-id";
import {Item} from "./items/item";

describe('Add item to cart', () => {
    const cart = Cart.create([])
    test('check size', () => {
        expect(cart.size).toBe(0);
    });

    test('add item to cart', () => {
        const item = new Item({name: "cat", amount: 2, price: 5}, new UniqueEntityID("1"));
        expect(cart.addItem(item).size).toBe(1);
    });

    test('add same item to cart', () => {
        const cart = Cart.create([])
        const itemId = new UniqueEntityID("1")
        const item = new Item({name: "cat", amount: 1, price: 5}, itemId);

        expect(cart.size).toBe(0);

        const c1 = cart.addItem(item)
        expect(c1.size).toBe(1);
        expect(c1.getItem(itemId)?.amount).toBe(1)

        const c2 = c1.addItem(item)
        expect(c2.size).toBe(1);
        expect(c2.getItem(itemId)?.amount).toBe(2)
    });
});