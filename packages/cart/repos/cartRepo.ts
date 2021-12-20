import {UniqueEntityID} from "../../share/domain/unique-entity-id";

export interface ICartRepo {
    getCartById: (id: UniqueEntityID) => Promise<any>;
    save: (data: any) => Promise<void>;
}