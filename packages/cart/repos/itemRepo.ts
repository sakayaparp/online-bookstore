import {UniqueEntityID} from "../../share/domain/unique-entity-id";
import {Item} from "../items/item"

export interface IItemRepo {
    save: (data: any) => Promise<void>;
    getItemById: (id: UniqueEntityID) => Promise<Item | undefined>;
}