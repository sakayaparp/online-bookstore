import { Book, BookProps } from "./book";
import { Amount } from "./value-object/amount";
import { ISBN } from "./value-object/isbn";
import { Money } from "./value-object/money";
import { Name } from "./value-object/name";

describe("Book aggregate root", () => {
  test("create book should be valid", () => {
    let bookData: BookProps = {
      ISBN: ISBN.create("9971-5-0210-0"),
      title: "Mock Book Name",
      authors: [Name.create("Mock Name")],
      amount: Amount.create(500),
      price: Money.create({ value: 100, currency: "BTC" }),
      coverImage: "./image.jpg",
      description: "Lopem Lopem Lopem",
    };
    let book = Book.create(bookData);
    expect(bookData.ISBN).toEqual(book.isbn);
    expect(bookData.title).toEqual(book.title);
    expect(bookData.authors).toEqual(book.authors);
    expect(bookData.amount).toEqual(book.amount);
    expect(bookData.price).toEqual(book.price);
    expect(bookData.coverImage).toEqual(book.coverImage);
    expect(bookData.description).toEqual(book.description);
  });
});
