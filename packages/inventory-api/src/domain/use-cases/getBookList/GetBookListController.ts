import { GetBookListUseCase } from "./GetBookListUseCase";
import {BaseController} from "../../../../../share/infra/http/models/BaseController";
import { Request, Response } from 'express';

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
