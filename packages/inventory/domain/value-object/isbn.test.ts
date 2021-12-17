import { ISBN } from "./isbn";

describe("isbn value object test", () => {
  test("isbn should be valid", () => {
    let expectISBN = "9971-5-0210-0";
    let isbn = ISBN.create(expectISBN);
    expect(expectISBN).toBe(isbn.value);
  });

  test("isbn invalid format should be invalid", () => {
    let isbns: string[] = [
      "123123123",
      "9971-5-02120-9",
      "99711-5-0210-0asdf",
      "asdfad",
    ];

    isbns.map((v) => {
      let t = () => {
        ISBN.create(v);
      };
      expect(t).toThrowError("ISBN must be valid format");
    });
  });
});
