import {UniqueEntityID} from "../../../../share/domain/unique-entity-id";

export interface AddItemDTO {
    cartId: UniqueEntityID,
    itemId: UniqueEntityID
}