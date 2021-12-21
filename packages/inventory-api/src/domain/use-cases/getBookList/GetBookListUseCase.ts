import { IBookRepoInterface } from "../../repos/bookRepo";
import { Book } from "../../book"

export class GetBookListUseCase {
    private bookRepo: IBookRepoInterface;

    constructor(bookRepo: IBookRepoInterface) {
        this.bookRepo = bookRepo;
    }

    public async execute(): Promise<Book[]> {
        let books = await this.bookRepo.findAll();
        return books
    }
}