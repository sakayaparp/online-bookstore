import { IItemRepo } from "../../repos/itemRepo";
import { Item } from "../../items/item";
import { CreateItemDTO } from "./CreateItemDTO";
import { UniqueEntityID } from "../../../share/domain/unique-entity-id";

export class CreateItemUseCase {
  public itemRepo: IItemRepo;

  constructor(itemRepo: IItemRepo) {
    this.itemRepo = itemRepo;
  }

  async execute(request: CreateItemDTO, bookId: UniqueEntityID): Promise<any> {
    const item = Item.create(request, bookId);
    await this.itemRepo.save(item);

    return item;
  }
}
