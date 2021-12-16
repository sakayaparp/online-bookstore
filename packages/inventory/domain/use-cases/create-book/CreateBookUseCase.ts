import { CreateBookDTO } from "./CreateBookDTO";
import { Book } from "../../book";
import { Outbox, OutboxProps } from "../../outbox"
import { IBookRepoInterface } from "../../repos/bookRepo"
import { IOutboxRepo } from "../../repos/outboxRepo";

export class CreateBook {
  private bookRepo: IBookRepoInterface;
  private outboxRepo: IOutboxRepo

  constructor(bookRepo: IBookRepoInterface, outboxRepo: IOutboxRepo) {
    this.bookRepo = bookRepo;
    this.outboxRepo = outboxRepo;
  }

  public async execute(request: CreateBookDTO): Promise<Book> {
    if (this.bookRepo.hasBookById(request.ISBN)) {
      throw new Error("Duplicate ISBN key");
    }
    const book = Book.create(request);
    await this.bookRepo.save(book);
    let outboxProps: OutboxProps = {
      eventName: "Book:CREATE",
      aggregateId: book.isbn,
      aggregateType: "Book",
      payload: JSON.stringify(request),
      status: "WAITING", 
    }
    const outbox = Outbox.create(outboxProps);
    await this.outboxRepo.save(outbox)
    return book
  }
}
