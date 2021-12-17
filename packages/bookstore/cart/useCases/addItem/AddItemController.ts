import {AddItem} from "./AddItem";
import {NextApiRequest, NextApiResponse} from "next";
import {AddItemDTO} from "./AddItemDTO";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import {BaseController} from "../../../../share/infra/http/models/BaseController";

export class AddItemController extends BaseController {
    private useCase: AddItem;

    constructor(useCase: AddItem) {
        super();
        this.useCase = useCase;
    }

    async executeImpl(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>): Promise<any> {
        console.log("body", req.body)
        const {cartId, itemId} = req.body;
        const dto: AddItemDTO = {
            cartId: cartId,
            itemId: itemId
        }

        const result = await this.useCase.execute(dto);
        return res.status(200).json(result)
    }
}