import { Money, MoneyProps } from "./money";

describe("Test Money class", () => {
  test("money with BTC currency should be valid", () => {
    let expectValueObject: MoneyProps = {
      value: 100,
      currency: "BTC",
    };
    let money = Money.create(expectValueObject);
    expect(expectValueObject.value).toBe(money.value);
    expect(expectValueObject.currency).toBe(money.currency);
  });

  test("money with THB currency should be valid", () => {
    let expectValueObject: MoneyProps = {
      value: 100,
      currency: "THB",
    };
    let money = Money.create(expectValueObject);
    expect(expectValueObject.value).toBe(money.value);
    expect(expectValueObject.currency).toBe(money.currency);
  });

  test("money with USD currency should be valid", () => {
    let expectValueObject: MoneyProps = {
      value: 100,
      currency: "USD",
    };
    let money = Money.create(expectValueObject);
    expect(expectValueObject.value).toBe(money.value);
    expect(expectValueObject.currency).toBe(money.currency);
  });

  test("money with BTC value less than zero should be invalid", () => {
    let expectValueObject: MoneyProps = {
      value: -100,
      currency: "BTC",
    };
    const throwErrorMock = () => {
      Money.create(expectValueObject);
    };
    expect(throwErrorMock).toThrowError("Value should be positive number");
  });

  test("money with THB value less than zero should be invalid", () => {
    let expectValueObject: MoneyProps = {
      value: -100,
      currency: "THB",
    };
    const throwErrorMock = () => {
      Money.create(expectValueObject);
    };
    expect(throwErrorMock).toThrowError("Value should be positive number");
  });

  test("money with USD value less than zero should be invalid", () => {
    let expectValueObject: MoneyProps = {
      value: -100,
      currency: "USD",
    };
    const throwErrorMock = () => {
      Money.create(expectValueObject);
    };
    expect(throwErrorMock).toThrowError("Value should be positive number");
  });
});
