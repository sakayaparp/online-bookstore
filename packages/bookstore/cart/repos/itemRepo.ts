import {UniqueEntityID} from "../../../share/domain/unique-entity-id";

export interface IItemRepo {
    getItemById: (id: UniqueEntityID) => Promise<any>;
}