import {Item} from './item'
import {UniqueEntityID} from "../../../share/domain/unique-entity-id";

describe('item', () => {
    const item = Item.create("cat", 2, 5);
    test('calculate total price', () => {
        expect(item.totalPrice()).toBe(10);
    });
});