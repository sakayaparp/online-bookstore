import { Category, CategoryProps } from "./category";
import { UniqueEntityID } from "../../share/domain/unique-entity-id";

describe("category aggregate root", () => {
  test("create category should be valid", () => {
    let categoryData: CategoryProps = {
      bookId: new UniqueEntityID("book_id"),
      name: "drama",
    };
    let category = Category.create(categoryData);
    expect(categoryData.bookId).toEqual(category.bookId);
    expect(categoryData.name).toEqual(category.name);
  });
});
