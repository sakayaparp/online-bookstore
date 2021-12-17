import { IBookRepoInterface } from '../bookRepo'
import { ISBN } from '../../value-object/isbn'
import { Book } from "../../book";
import { Outbox, OutboxProps } from '../../outbox';
import { SequelizeEventRepo } from './sequelizeEventRepo';

export class SequelizeBookRepo implements IBookRepoInterface {
    public books: Book[] = []
    public eventRepo = new SequelizeEventRepo()

    async findAll(): Promise<Book[]> {
        return this.books
    }

    async save(data: Book): Promise<Book> {
        this.books.push(data)

        data.domainEvents.forEach(v => {
            this.eventRepo.save(v);
        })

        // TODO:: check upsert or not
        return data;
    }

    hasBookById(id: ISBN): boolean {
        let result = this.books.filter(v => v.isbn === id)
        return result.length >= 1
    }
}