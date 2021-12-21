import { ValueObject } from "../../../share/domain/value-object";

interface ISBNProps {
  value: string;
}

export class ISBN extends ValueObject<ISBNProps> {
  private constructor(props: ISBNProps) {
    super(props);
  }

  public static create(value: string): ISBN {
    const isbnChecker = /^\d{4}?-\d{1}-\d{4}-\d{1}$/i;
    if (!isbnChecker.test(value)) {
      throw new Error("ISBN must be valid format");
    }
    return new ISBN({ value });
  }

  public get value(): string {
    return this.props.value;
  }
}
