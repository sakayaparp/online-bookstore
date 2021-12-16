import { IBookRepoInterface } from '../bookRepo'
import { ISBN } from '../../value-object/isbn'
import { Book } from "../../book";

export class SequelizeBookRepo implements IBookRepoInterface {
    public books: Book[] = []
    async save(data: any): Promise<any> {
        this.books.push(data)
        console.log(this.books)
    }

    hasBookById(id: ISBN): boolean {
        let result = this.books.filter(v => v.isbn === id)
        return result.length >= 1
    }
}