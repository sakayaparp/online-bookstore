import { BaseController } from "../../../../share/infra/http/models/BaseController";
import * as express from 'express'
import { GetBookListUseCase } from "./GetBookListUseCase";

export class GetBookListController extends BaseController {
    private useCase: GetBookListUseCase

    constructor(useCase: GetBookListUseCase) {
        super();
        this.useCase = useCase
    }

    async executeImpl (req: express.Request, res: express.Response): Promise<any> {
        try {
            let books = await this.useCase.execute()
            let dto = books.map(v => v.props)
            return this.ok(res, dto)
        } catch (err) {
            return this.fail(res, err)
        }
    }
}