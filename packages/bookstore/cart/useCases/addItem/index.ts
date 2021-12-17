import {AddItem} from "./AddItem";
import {AddItemController} from "./AddItemController";
import {cartRepo, itemRepo} from "../../repos"

const addItem = new AddItem(cartRepo, itemRepo);
const addItemController = new AddItemController(addItem);

export {
    addItem,
    addItemController
}