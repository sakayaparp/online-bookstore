import { Book} from "../book";
import {IDomainEvent, Status} from "../../../../share/domain/events/IDomainEvents";

export class BookCreated implements IDomainEvent<Book> {
    readonly status: Status;
    readonly payload: string;
    readonly name: string;
    readonly aggregateType: any;
    readonly aggregateId: string;
    readonly type: string;

    constructor(book: Book) {
        
        this.payload = JSON.stringify(book)
        this.status = "CREATED";
        this.name = "book:created";
        this.aggregateType = "Book";
        this.aggregateId = book.id.toString();
        this.type = "bookCreated"
    }
}
