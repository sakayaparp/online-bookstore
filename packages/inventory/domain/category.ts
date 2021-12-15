import { AggregateRoot } from "../../share/domain/aggregate-root";
import { UniqueEntityID } from "../../share/domain/unique-entity-id";

export interface CategoryProps {
  name: string;
}

export class Category extends AggregateRoot<CategoryProps> {
  private constructor(props: CategoryProps, id?: UniqueEntityID) {
    super(props, [], id);
  }

  public get name(): string {
    return this.props.name;
  }

  static create(cate: CategoryProps, existingId?: UniqueEntityID) {
    const generatedId = new UniqueEntityID();
    const id = existingId || generatedId;
    return new Category(cate, id);
  }
}
