import { ISBN } from "../value-object/isbn";
import { Book } from "../book"

export interface IBookRepoInterface {
    findAll: () => Promise<Book[]>;
    save: (data: any) => Promise<any>;
    hasBookById: (id: ISBN) => boolean;
}