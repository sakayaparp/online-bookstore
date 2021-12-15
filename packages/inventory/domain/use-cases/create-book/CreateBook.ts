import { ISBN } from "../../value-object/isbn";
import { CreateBookDTO } from "./CreateBookDTO";
import { Book } from "../../book";
import { rejects } from "assert";

export interface BookRepoInterface {
  save: (data: any) => Promise<any>;
  hasBookById: (id: ISBN) => boolean;
}

export class CreateBook {
  private bookRepo: BookRepoInterface;

  constructor(bookRepo: BookRepoInterface) {
    this.bookRepo = bookRepo;
  }

  public async execute(request: CreateBookDTO): Promise<Book> {
    if (this.bookRepo.hasBookById(request.ISBN)) {
      throw new Error("Duplicate ISBN key");
    }
    const book = Book.create(request);
    await this.bookRepo.save(book);
    return book
  }
}
