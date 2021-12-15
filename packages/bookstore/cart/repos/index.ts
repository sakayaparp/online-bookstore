import {CartRepo} from "./implementations/cartRepo"
import {ItemRepo} from "./implementations/itemRepo";

const cartRepo = new CartRepo([]);
const itemRepo = new ItemRepo([]);

export {cartRepo, itemRepo}