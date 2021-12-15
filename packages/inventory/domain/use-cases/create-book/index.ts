
import { CreateBook } from "./CreateBook";
import { CreateBookController } from "./CreateBookController";
import { BookRepoInterface } from "./CreateBook";

let createBookRepo: BookRepoInterface = ({
    save: () => new Promise(() => {}),
    hasBookById: () => false,
})
const createBookUseCase = new CreateBook(createBookRepo);
const createBookController = new CreateBookController(createBookUseCase);

export {
    createBookUseCase,
    createBookController
}