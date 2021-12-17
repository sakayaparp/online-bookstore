import * as express from 'express'
import {addItemController} from "../../../cart/useCases/addItem";

const cartRouter = express.Router();

cartRouter.post('/',
    (req, res) => addItemController.execute(req, res)
);

export {cartRouter}