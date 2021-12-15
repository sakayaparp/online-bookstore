import {Cart} from './cart'
import {UniqueEntityID} from "../../share/domain/unique-entity-id";
import {Item} from "./items/item";

describe('Add item to cart', () => {
    test('add one item to cart', () => {
        const cart = Cart.create([]);
        expect(cart.size).toBe(0);
        const item = Item.create("cat", 2, 5, new UniqueEntityID("1"));
        expect(cart.addItem(item).size).toBe(1);
    });

    test('add same item to cart', () => {
        const cart = Cart.create([]);
        const itemId = new UniqueEntityID("1")
        const item = Item.create("cat", 1, 5, itemId);

        expect(cart.size).toBe(0);

        const cart1 = cart.addItem(item)
        expect(cart1.size).toBe(1);
        expect(cart1.getItem(itemId)?.amount).toBe(1)

        const cart2 = cart1.addItem(item)
        expect(cart2.size).toBe(1);
        expect(cart2.getItem(itemId)?.amount).toBe(2)
    });

    test('add different item to cart', () => {
        const cart = Cart.create([])

        const itemId1 = new UniqueEntityID("1");
        const item1 = Item.create("cat", 1, 5, itemId1);

        const itemId2 = new UniqueEntityID("2");
        const item2 = Item.create("dog", 1, 5, itemId2);

        const cart1 = cart.addItem(item1)
        expect(cart1.size).toBe(1);
        expect(cart1.getItem(itemId1)?.amount).toBe(1)

        const cart2 = cart1.addItem(item2)
        expect(cart2.size).toBe(2);
        expect(cart2.getItem(itemId1)?.amount).toBe(1)
        expect(cart2.getItem(itemId2)?.amount).toBe(1)
    });
});

describe('Remove item from cart', () => {
    test('remove item from empty cart', () => {
        const cart = Cart.create([]);
        expect(cart.size).toBe(0);

        const itemId = new UniqueEntityID("1");
        expect(cart.removeItem(itemId).size).toBe(0);
    });

    test('remove item from cart', () => {
        const itemId = new UniqueEntityID("1")
        const item = Item.create("cat", 1, 5, itemId);

        const cart = Cart.create([item]);
        expect(cart.size).toBe(1);

        expect(cart.removeItem(itemId).size).toBe(0);
    });

    test('remove same item twice', () => {
        const itemId = new UniqueEntityID("1")
        const item = Item.create("cat", 1, 5, itemId);

        const cart = Cart.create([item]);
        expect(cart.size).toBe(1);

        expect(cart.removeItem(itemId).size).toBe(0);
        expect(cart.removeItem(itemId).size).toBe(0);
    });

    test('remove one item from cart one item remain', () => {
        const itemId1 = new UniqueEntityID("1");
        const item1 = Item.create("cat", 1, 5, itemId1);

        const itemId2 = new UniqueEntityID("2");
        const item2 = Item.create("dog", 1, 5, itemId2);

        const cart = Cart.create([item1, item2])

        expect(cart.size).toBe(2);
        expect(cart.removeItem(itemId1).size).toBe(1);
        expect(cart.hasItem(itemId1)).toBeFalsy();
    });
});

describe("Clear cart", () => {
    test('clear empty cart', () => {
        const cart = Cart.create([]);
        expect(cart.clearCart().size).toBe(0);
    });

    test('clear cart when cart not empty', () => {
        const itemId1 = new UniqueEntityID("1");
        const item1 = Item.create("cat", 1, 5, itemId1);

        const itemId2 = new UniqueEntityID("2");
        const item2 = Item.create("dog", 1, 5, itemId2);

        const cart = Cart.create([item1, item2])
        expect(cart.size).toBe(2);
        expect(cart.clearCart().size).toBe(0);
    });
});

describe("Deduct item from cart", () => {
    test('deduct item', () => {
        const itemId = new UniqueEntityID("1")
        const item = Item.create("cat", 2, 5, itemId);
        const cart = Cart.create([item]);

        const deductedCart = cart.deductItem(item);
        expect(deductedCart.size).toBe(1);
        expect(deductedCart.getItem(itemId)?.amount).toBe(1);
    });

    test('deduct item amount equal zero', () => {
        const itemId = new UniqueEntityID("1")
        const item = Item.create("cat", 1, 5, itemId);
        const cart = Cart.create([item]);

        const deductedCart = cart.deductItem(item);
        expect(deductedCart.size).toBe(0);
    });

    test('deduct item amount two items in cart', () => {
        const itemId1 = new UniqueEntityID("1");
        const item1 = Item.create("cat", 1, 5, itemId1);

        const itemId2 = new UniqueEntityID("2");
        const item2 = Item.create("dog", 1, 5, itemId2);

        const cart = Cart.create([item1, item2])

        expect(cart.size).toBe(2);
        const deductedCart = cart.deductItem(item1);

        expect(deductedCart.size).toBe(1);
        expect(cart.hasItem(itemId1)).toBeFalsy();
        expect(deductedCart.getItem(itemId2)?.amount).toBe(1);
    });
});