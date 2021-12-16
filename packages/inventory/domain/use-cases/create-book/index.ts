
import { CreateBook } from "./CreateBookUseCase";
import { CreateBookController } from "./CreateBookController";
import { bookRepo } from "../../repos/"

const createBookUseCase = new CreateBook(bookRepo);
const createBookController = new CreateBookController(createBookUseCase);

export {
    createBookUseCase,
    createBookController
}