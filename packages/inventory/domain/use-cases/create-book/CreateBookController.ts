import { BaseController } from '../../../../share/infra/http/models/BaseController'
import * as express from 'express'
import { CreateBook } from './CreateBook'
import { CreateBookDTO } from "./CreateBookDTO";

export class CreateBookController extends BaseController {
    private useCase: CreateBook;

    constructor (useCase: CreateBook) {
        super();
        this.useCase = useCase;
    }

    async executeImpl (req: express.Request, res: express.Response): Promise<any> {
        let dto: CreateBookDTO = req.body as CreateBookDTO;

        try {
            await this.useCase.execute(dto)
            return this.created(res)
        } catch (err) {
            return this.fail(res, err)
        }
    }
}
