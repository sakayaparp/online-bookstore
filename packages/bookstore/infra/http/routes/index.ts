import * as express from 'express'
import {addItemController} from "../../../cart/useCases/addItem";

const cartRouter = express.Router();

cartRouter.post('/',
    (req: express.Request, res: express.Response) => addItemController.execute(req, res)
);

export {cartRouter}