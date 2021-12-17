import {UniqueEntityID} from "../../../share/domain/unique-entity-id";

export interface IItemRepo {
    save: (data: any) => Promise<void>;
    getItemById: (id: UniqueEntityID) => Promise<any>;
}