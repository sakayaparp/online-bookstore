
import { CreateBook } from "./CreateBook";
import { CreateBookController } from "./CreateBookController";
import { userRepo } from "../../repos/"

const createBookUseCase = new CreateBook(userRepo);
const createBookController = new CreateBookController(createBookUseCase);

export {
    createBookUseCase,
    createBookController
}