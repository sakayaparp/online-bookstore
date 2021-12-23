import {ValueObject} from "../../../../share/domain/value-object";

export type Currency = "THB" | "USD" | "BTC";

export interface MoneyProps {
  currency: Currency;
  value: number;
}

export class Money extends ValueObject<MoneyProps> {
  private constructor(props: MoneyProps) {
    super(props);
  }

  public static create(props: MoneyProps) {
    const { value } = props;
    if (value === undefined || value < 0) {
      throw new Error("Value should be positive number");
    }
    return new Money(props);
  }

  public get value(): number {
    return this.props.value;
  }

  public get currency(): Currency {
    return this.props.currency;
  }
}
