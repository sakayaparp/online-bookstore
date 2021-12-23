import { GetBookListUseCase } from "./GetBookListUseCase";
import { Request, Response } from 'express';
import {BaseController} from "../../../infra/http/models/BaseController";

export class GetBookListController extends BaseController {
    private useCase: GetBookListUseCase

    constructor(useCase: GetBookListUseCase) {
        super();
        this.useCase = useCase
    }

    async executeImpl (req: Request, res: Response): Promise<any> {
        try {
            let books = await this.useCase.execute()
            return this.ok(res, books)
        } catch (err) {
            // return this.fail(res, err)
        }
    }
}
