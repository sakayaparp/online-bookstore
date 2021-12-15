import {ICartRepo} from "../cartRepo";
import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";

export class CartRepo implements ICartRepo {
    private models: any;

    constructor(models: any) {
        this.models = models;
    }

    public async save(data: any): Promise<void> {
        this.models.append(data)
        return this.models;
    }

    public async getCartById(cartId: UniqueEntityID) {
        return this.models.find(cartId);
    }
}