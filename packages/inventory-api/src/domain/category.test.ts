import { Category, CategoryProps } from "./category";
import {UniqueEntityID} from "./unique-entity-id";


describe("category aggregate root", () => {
  test("create category should be valid", () => {
    let categoryData: CategoryProps = {
      name: "drama",
    };
    let category = Category.create(categoryData);
    expect(categoryData.name).toEqual(category.name);
    expect(category.id).toBeDefined();
  });

  test("create category with existing id should be valid", () => {
    let categoryData: CategoryProps = {
      name: "comady",
    }
    let existingId = new UniqueEntityID()
    let category = Category.create(categoryData, existingId);
    expect(categoryData.name).toEqual(category.name);
    expect(existingId).toEqual(category.id)
  })
});
