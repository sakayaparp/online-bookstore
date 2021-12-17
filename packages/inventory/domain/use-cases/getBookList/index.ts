import { GetBookListController } from "./GetBookListController";
import { GetBookListUseCase } from "./GetBookListUseCase";
import { bookRepo } from "../../repos/"

const getBookListUseCase = new GetBookListUseCase(bookRepo)
const getBookListController = new GetBookListController(getBookListUseCase)

export {
    getBookListUseCase,
    getBookListController
}