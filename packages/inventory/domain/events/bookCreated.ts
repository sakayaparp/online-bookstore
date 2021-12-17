import { IDomainEvent, Status } from "../../../share/domain/events/IDomainEvents";
import { UniqueEntityID } from "../../../share/domain/unique-entity-id";
import { Book, BookProps } from "../book";

export class BookCreated implements IDomainEvent<Book> {
    readonly dateTimeOccurred: Date;
    readonly status: Status;
    readonly payload: Book;
    readonly name: string;
    readonly aggregateType: any;
    readonly aggregateId: UniqueEntityID;

    constructor(book: Book) {
        
        this.payload = book;
        this.status = "CREATED";
        this.name = "book:created";
        this.aggregateType = "Book";
        this.aggregateId = book.id;

        this.dateTimeOccurred = new Date();
    }
}