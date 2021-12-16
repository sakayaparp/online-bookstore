
import { CreateBook } from "./CreateBookUseCase";
import { CreateBookController } from "./CreateBookController";
import { bookRepo, outboxRepo } from "../../repos/"

const createBookUseCase = new CreateBook(bookRepo, outboxRepo);
const createBookController = new CreateBookController(createBookUseCase);

export {
    createBookUseCase,
    createBookController
}