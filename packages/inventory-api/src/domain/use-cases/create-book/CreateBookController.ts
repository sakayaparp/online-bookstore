import {CreateBook} from './CreateBookUseCase'
import {Request, Response} from 'express';
import {BaseController} from "../../../infra/http/models/BaseController";

export class CreateBookController extends BaseController {
    private useCase: CreateBook;

    constructor(useCase: CreateBook) {
        super();
        this.useCase = useCase;
    }

    async executeImpl(req: Request, res: Response): Promise<any> {
        try {
            await this.useCase.execute(req.body)
            return this.created(res)
        } catch (err) {
            // return this.fail(res, err)
        }
    }
}
