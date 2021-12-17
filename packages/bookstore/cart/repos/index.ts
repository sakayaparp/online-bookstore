import {SequelizeCartRepo} from "./implementations/sequelizeCartRepo"
import {SequelizeItemRepo} from "./implementations/sequelizeItemRepo";

const cartRepo = new SequelizeCartRepo();
const itemRepo = new SequelizeItemRepo();

export {cartRepo, itemRepo}