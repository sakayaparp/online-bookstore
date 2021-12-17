import { IBookRepoInterface } from '../bookRepo'
import { ISBN } from '../../value-object/isbn'
import { Book } from "../../book";
import { Event, EventProps } from "../../event";
import { SequelizeEventRepo } from './sequelizeEventRepo';
import {Poller} from '../../../infra/poller'
import {eventRepo} from "../../repos"

export class SequelizeBookRepo implements IBookRepoInterface {
    public books: Book[] = []

    async findAll(): Promise<Book[]> {
        return this.books
    }

    async save(data: Book): Promise<Book> {
        this.books.push(data)
        data.domainEvents.forEach(v => {
            eventRepo.save(v);
        })
        return data;
    }

    hasBookById(id: ISBN): boolean {
        let result = this.books.filter(v => v.isbn === id)
        return result.length >= 1
    }
}