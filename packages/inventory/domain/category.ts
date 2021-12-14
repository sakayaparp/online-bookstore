import { AggregateRoot } from "../../share/domain/aggregate-root";
import { UniqueEntityID } from "../../share/domain/unique-entity-id";

export interface CategoryProps {
  bookId: UniqueEntityID;
  name: string;
}

export class Category extends AggregateRoot<CategoryProps> {
  private constructor(props: CategoryProps) {
    super(props);
  }

  public get bookId(): UniqueEntityID {
    return this.props.bookId;
  }

  public get name(): string {
    return this.props.name;
  }

  static create(cate: CategoryProps) {
    return new Category(cate);
  }
}
