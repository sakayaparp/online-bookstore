import {Router} from 'express';
import {getBookListController} from "../domain/use-cases/getBookList";


// Export the base-router
const baseRouter = Router();

baseRouter.use('/books', (req, res) => getBookListController.execute(req, res))

export default baseRouter;
