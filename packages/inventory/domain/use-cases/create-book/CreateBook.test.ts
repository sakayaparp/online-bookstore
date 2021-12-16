import { CreateBook } from "./CreateBookUseCase";
import { CreateBookDTO } from "./CreateBookDTO"
import { IBookRepoInterface } from "../../repos/bookRepo"
import { Amount } from "../../value-object/amount";
import { ISBN } from "../../value-object/isbn";
import { Money } from "../../value-object/money";
import { Name } from "../../value-object/name";
import { UniqueEntityID } from "../../../../share/domain/unique-entity-id";

describe("use case create book test", () => {
  test("create book", () => {
    let bookRepo: IBookRepoInterface = {
      findAll: jest.fn(),
      save: jest.fn(),
      hasBookById: jest.fn(() => false),
    };
    let book: CreateBookDTO = {
      ISBN: ISBN.create("9971-5-0210-0"),
      title: "Mock Book Name",
      authors: [Name.create("Mock Name")],
      amount: Amount.create(500),
      price: Money.create({ value: 100, currency: "BTC" }),
      coverImage: "./image.jpg",
      description: "Lopem Lopem Lopem",
      categoryId: new UniqueEntityID("cate-1"),
    };
    const createBook = new CreateBook(bookRepo);

    createBook.execute(book);
    expect(bookRepo.save).toHaveBeenCalled();
  });

  test("create book duplicate", async () => {
    let bookRepo: IBookRepoInterface = {
      findAll: jest.fn(),
      save: jest.fn(),
      hasBookById: jest.fn(() => true),
    };
    let book: CreateBookDTO = {
      ISBN: ISBN.create("9971-5-0210-0"),
      title: "Mock Book Name",
      authors: [Name.create("Mock Name")],
      amount: Amount.create(500),
      price: Money.create({ value: 100, currency: "BTC" }),
      coverImage: "./image.jpg",
      description: "Lopem Lopem Lopem",
      categoryId: new UniqueEntityID("cate-1"),
    };

    try {
      await new CreateBook(bookRepo).execute(book);
    } catch (error) {
      expect(error).toEqual(new Error("Duplicate ISBN key"));
    }
  });
});
