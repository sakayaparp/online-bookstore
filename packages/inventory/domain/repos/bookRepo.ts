import { ISBN } from "../value-object/isbn";
import { Book } from "../book"

export interface IBookRepoInterface {
    findAll: () => Promise<Book[]>;
    save: (data: Book) => Promise<Book>;
    hasBookById: (id: ISBN) => boolean;
}