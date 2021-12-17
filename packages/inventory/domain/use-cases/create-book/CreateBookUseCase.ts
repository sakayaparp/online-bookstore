import { CreateBookDTO } from "./CreateBookDTO";
import { Book } from "../../book";
import { IBookRepoInterface } from "../../repos/bookRepo"

export class CreateBook {
  private bookRepo: IBookRepoInterface;

  constructor(bookRepo: IBookRepoInterface) {
    this.bookRepo = bookRepo;
  }

  public async execute(request: CreateBookDTO): Promise<Book> {
    if (this.bookRepo.hasBookById(request.ISBN)) {
      throw new Error("Duplicate ISBN key");
    }
    // transaction
    const book = Book.create(request);
    await this.bookRepo.save(book);

    // publish event
    // const poller = Poller.create('from pub')
    // poller.publish(outboxProps)
    return book
  }
}
