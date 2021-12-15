import { ISBN } from "../../value-object/isbn";
import { Name } from "../../value-object/name";
import { Amount } from "../../value-object/amount";
import { Money } from "../../value-object/money";
import { UniqueEntityID } from "../../../../share/domain/unique-entity-id";
import { Book } from "../../book";

export interface BookRepoInterface {
  save: (data: any) => Promise<any>;
  hasBookById: (id: ISBN) => boolean;
}

export interface CreateBookDTO {
  ISBN: ISBN;
  title: string;
  authors: Name[];
  amount: Amount;
  price: Money;
  coverImage: string;
  description: string;
  categoryId: UniqueEntityID;
}

export class CreateBook {
  private bookRepo: BookRepoInterface;

  constructor(bookRepo: BookRepoInterface) {
    this.bookRepo = bookRepo;
  }

  public async execute(request: CreateBookDTO) {
    if (this.bookRepo.hasBookById(request.ISBN)) {
      throw new Error("Duplicate ISBN key");
    }
    const book = Book.create(request);
    await this.bookRepo.save(book);
  }
}
