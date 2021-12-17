import {IItemRepo} from "../itemRepo";
import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";

export class SequelizeItemRepo implements IItemRepo {

    public async getItemById(itemId: UniqueEntityID) {

    }
}