import {Item, ItemProps} from './item'
import {UniqueEntityID} from "../../share/domain/unique-entity-id";

describe('item', () => {
    test('calculate total price', () => {
        let itemProps: ItemProps = {
            name: "cat",
            amount: 2,
            price: 5,
        };
        const item = Item.create(itemProps);
        expect(item.totalPrice).toBe(10);
    });

    test('increase item amount', () => {
        let itemProps: ItemProps = {
            name: "cat",
            amount: 2,
            price: 5,
        };
        const item = Item.create(itemProps);
        const increasedItem = item.increaseAmount()
        expect(increasedItem.amount).toBe(3)
    });

    test('increase 2 item amount', () => {
        let itemProps: ItemProps = {
            name: "cat",
            amount: 2,
            price: 5,
        };
        const item = Item.create(itemProps);
        const increasedItem1 = item.increaseAmount()
        expect(increasedItem1.amount).toBe(3)
        const increasedItem2 = increasedItem1.increaseAmount()
        expect(increasedItem2.amount).toBe(4)
    });

    test('decrease item amount', () => {
        let itemProps: ItemProps = {
            name: "cat",
            amount: 2,
            price: 5,
        };
        const item = Item.create(itemProps);
        const decreasedItem = item.decreaseAmount()
        expect(decreasedItem.amount).toBe(1)
    });
});