import {Amount} from "./value-object/amount";
import {ISBN} from "./value-object/isbn";
import {Money} from "./value-object/money";
import {Name} from "./value-object/name";
import {BookCreated} from "./events/bookCreated";
import {UniqueEntityID} from "../../../share/domain/unique-entity-id";
import {AggregateRoot} from "../../../share/domain/aggregate-root";
import {IDomainEvent} from "../../../share/domain/events/IDomainEvents";

export interface BookProps {
    ISBN: ISBN;
    title: string;
    authors: Name[];
    amount: Amount;
    price: Money;
    coverImage: string;
    description: string;
    categoryId: UniqueEntityID;
}

export class Book extends AggregateRoot<BookProps> {
    private constructor(
        props: BookProps,
        domainEvents: IDomainEvent<Book>[],
        id?: UniqueEntityID
    ) {
        super(props, domainEvents, id);
    }

    public get isbn(): ISBN {
        return this.props.ISBN;
    }

    public get title(): string {
        return this.props.title;
    }

    public get authors(): Name[] {
        return this.props.authors;
    }

    public get amount(): Amount {
        return this.props.amount;
    }

    public get price(): Money {
        return this.props.price;
    }

    public get coverImage(): string {
        return this.props.coverImage;
    }

    public get description(): string {
        return this.props.description;
    }

    public get categoryId(): UniqueEntityID {
        return this.props.categoryId;
    }

    static create(props: BookProps, existingId?: UniqueEntityID) {
        const generatedId = new UniqueEntityID();
        const id = existingId || generatedId;
        const book = new Book(props, [], id);

        if (id === existingId) {
            return book;
        }

        return new Book(book.props, [new BookCreated(book)], id);
    }
}
