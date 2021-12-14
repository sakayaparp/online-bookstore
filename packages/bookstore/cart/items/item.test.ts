import { Item } from './item'
import {UniqueEntityID} from "../../../share/domain/unique-entity-id";

describe('item', () => {
  const item = new Item({itemId: new UniqueEntityID(), name: "cat", amount: 2, price: 5});
    test('calculate total price', () => {
      expect(item.totalPrice()).toBe(10);
  });
});