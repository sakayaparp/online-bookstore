import {IItemRepo} from "../itemRepo";
import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";

export class ItemRepo implements IItemRepo {
    private models: any;

    constructor(models: any) {
        this.models = models;
    }
    public async getItemById(itemId: UniqueEntityID) {
        return this.models.find(itemId);
    }
}