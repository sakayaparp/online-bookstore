import { ISBN } from "../../value-object/isbn";
import { Name } from "../../value-object/name";
import { Amount } from "../../value-object/amount";
import { Money } from "../../value-object/money";
import { UniqueEntityID } from "../../../../share/domain/unique-entity-id";

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
  