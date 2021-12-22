import {CreateBook} from './CreateBookUseCase'
import {BaseController} from "../../../../../share/infra/http/models/BaseController";
import {Request, Response} from 'express';
import {CreateBookDTO} from "./CreateBookDTO";

export class CreateBookController extends BaseController {
    private useCase: CreateBook;

    constructor(useCase: CreateBook) {
        super();
        this.useCase = useCase;
    }

    async executeImpl(req: Request, res: Response): Promise<any> {
        let dto: CreateBookDTO = req.body as CreateBookDTO;
        try {
            await this.useCase.execute(req.body)
            return this.created(res)
        } catch (err) {
            // return this.fail(res, err)
        }
    }
}
