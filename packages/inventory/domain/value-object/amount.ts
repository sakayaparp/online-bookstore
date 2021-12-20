import { ValueObject } from "../../../share/domain/value-object";

interface AmountProps {
  value: number;
}

export class Amount extends ValueObject<AmountProps> {
  private constructor(props: AmountProps) {
    super(props);
  }

  public static create(value: number): Amount {
    if (value < 0 || !Number.isInteger(value)) {
      throw new Error("Amount must be valid value");
    }
    return new Amount({ value });
  }

  public get value(): number {
    return this.props.value;
  }
}
