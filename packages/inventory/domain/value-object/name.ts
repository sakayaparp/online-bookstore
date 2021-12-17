import { ValueObject } from "../../../share/domain/value-object";

interface NameProps {
  name: string;
}

export class Name extends ValueObject<NameProps> {
  private constructor(props: NameProps) {
    super(props);
  }

  public static validateName(name: string): boolean {
    const nameChecker = /^[a-z ,.'-]+$/i;
    if (name === undefined || name.length < 1 || !nameChecker.test(name)) {
      return false;
    }
    return true;
  }

  public static create(name: string): Name {
    if (!this.validateName(name)) {
      throw new Error("User must be valid value");
    }
    return new Name({ name });
  }

  public get name(): string {
    return this.props.name;
  }
}
