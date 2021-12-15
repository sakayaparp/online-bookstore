import {Item} from './item'
import {UniqueEntityID} from "../../../share/domain/unique-entity-id";

describe('item', () => {
    test('calculate total price', () => {
      const item = Item.create("cat", 2, 5);
        expect(item.totalPrice()).toBe(10);
    });

    test('increase item amount', () => {
      const item = Item.create("cat", 2, 5);
      expect(item.increaseAmount().amount).toBe(3)
  });
  test('increase 2 item `amount', () => {
    const item = Item.create("cat", 2, 5);
    const increasedItem1 = item.increaseAmount()
    expect(increasedItem1.amount).toBe(3)
    const increasedItem2 = increasedItem1.increaseAmount()
    expect(increasedItem2.amount).toBe(4)
});
});