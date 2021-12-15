import {AddItem} from "./AddItem";
import {NextApiRequest, NextApiResponse} from "next";
import {AddItemDTO} from "./AddItemDTO";

export class AddItemController {
    private useCase: AddItem;

    constructor (useCase: AddItem) {
        this.useCase = useCase;
    }

    async executeImpl (req: NextApiRequest, res: NextApiResponse): Promise<any> {
        const {cartId, itemId} = req.body;
        const dto: AddItemDTO = {
            cartId: cartId,
            itemId: itemId
        }

        const result = await this.useCase.execute(dto);
        return res.status(200).json(result)
    }
}