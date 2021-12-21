import { Name } from "./name";

describe("Test value object Name", () => {
  test("Jame bond name should be valid", () => {
    let expectName = "Jame bond";
    let name = Name.create(expectName);
    expect(expectName).toBe(name.name);
  });

  test("empty name should be invalid", () => {
    let expectName = "";

    const t = () => {
      Name.create(expectName);
    };
    expect(t).toThrowError("User must be valid value");
  });

  test("undefine name should be invalid", () => {
    let name: string;
    const t = () => {
      Name.create(name);
    };
    expect(t).toThrowError("User must be valid value");
  });
});
