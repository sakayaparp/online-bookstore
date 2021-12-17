import {AddItem} from "./AddItem";
import express from 'express'
import {AddItemDTO} from "./AddItemDTO";
import {BaseController} from "../../../../share/infra/http/models/BaseController";
import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";

export class AddItemController extends BaseController {
    private useCase: AddItem;

    constructor(useCase: AddItem) {
        super();
        this.useCase = useCase;
    }

    async executeImpl(req: express.Request, res: express.Response): Promise<any> {
        const {cartId, itemId} = req.body;
        const dto: AddItemDTO = {
            cartId: new UniqueEntityID(cartId),
            itemId: new UniqueEntityID(itemId)
        }

        let result;

        try {
            result = await this.useCase.execute(dto);
        } catch (err) {
            this.fail(res, err)
        }
        console.log("[CART]", result.props.items);
        return this.ok(res)
    }
}