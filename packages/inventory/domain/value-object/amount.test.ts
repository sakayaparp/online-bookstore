import { Amount } from "./amount";
describe("amount value object test", () => {
  test("amount should be valid", () => {
    let expectAmount = 1;
    let amount = Amount.create(expectAmount);
    expect(expectAmount).toBe(amount.value);
  });

  test("amount less than zero should be invalid", () => {
    let expectAmount = -1;
    let t = () => {
      Amount.create(expectAmount);
    };
    expect(t).toThrowError("Amount must be valid value");
  });

  test("amount with decimal should be invalid", () => {
    let expectAmount = 1.123;
    let t = () => {
      Amount.create(expectAmount);
    };
    expect(t).toThrowError("Amount must be valid value");
  });
});
