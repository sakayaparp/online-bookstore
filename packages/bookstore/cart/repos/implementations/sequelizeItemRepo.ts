import {IItemRepo} from "../itemRepo";
import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";
import {Item} from "../../items/item"

export class SequelizeItemRepo implements IItemRepo {
    public items: Item[] = [];

    public async save(data: any) {
        this.items.push(data)
        console.log("[REPO ItemRepo]", data)
    }

    public async getItemById(itemId: UniqueEntityID) {

    }
}