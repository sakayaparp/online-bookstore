import {IBookRepoInterface} from "../bookRepo";
import {ISBN} from "../../value-object/isbn";
import {Sequelize} from "sequelize/dist";
import {eventRepo} from "../index";
import {Book} from "../../book";


export class SequelizeBookRepo implements IBookRepoInterface {
    public books: Book[] = [];
    public sequelize: Sequelize;

    constructor(sequalize: Sequelize) {
        this.sequelize = sequalize;
    }

    async findAll(): Promise<any> {
        return await this.sequelize.model("inventories").findAll();
    }

    async save(data: Book): Promise<Book> {
        this.sequelize.model("inventories").create(data.props)
            .then(() => {
                data.domainEvents.forEach((v) => {
                    eventRepo.save(v)
                })
            }).catch(e => {
                console.log(e)
        })
        return data;
    }

    hasBookById(id: ISBN): boolean {
        let result = this.books.filter((v) => v.isbn === id);
        return result.length >= 1;
    }
}
