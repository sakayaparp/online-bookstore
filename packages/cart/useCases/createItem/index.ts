import {CreateItemUseCase} from "./CreateItemUseCase"
import {itemRepo} from "../../repos"

const createItemUseCase = new CreateItemUseCase(itemRepo);

export {
    createItemUseCase
}