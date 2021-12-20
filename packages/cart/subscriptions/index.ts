import {AfterBookCreated} from "./afterBookCreated"
import {createItemUseCase} from "../useCases/createItem"

new AfterBookCreated(createItemUseCase)