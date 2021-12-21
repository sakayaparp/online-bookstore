import { IBookRepoInterface } from "../bookRepo";
import { ISBN } from "../../value-object/isbn";
import { Book } from "../../book";
import { eventRepo } from "../../repos";
import { Sequelize } from "sequelize/dist";
import { QueryTypes } from "sequelize";

export class SequelizeBookRepo implements IBookRepoInterface {
  public books: Book[] = [];
  public sequelize: Sequelize;
  constructor(sequalize: Sequelize) {
    this.sequelize = sequalize;
  }

  async findAll(): Promise<any> {
    return await this.sequelize.query("SELECT * FROM inventories", {
      type: QueryTypes.SELECT,
    });
  }

  async save(data: Book): Promise<Book> {
    // this.books.push(data);
    // data.domainEvents.forEach((v) => {
    //   eventRepo.save(v);
    // });
    // return data;
    return data;
  }

  hasBookById(id: ISBN): boolean {
    let result = this.books.filter((v) => v.isbn === id);
    return result.length >= 1;
  }
}
