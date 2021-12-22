import {Router} from 'express';
import {getBookListController} from "../domain/use-cases/getBookList";
import {createBookController} from "../domain/use-cases/create-book";


// Export the base-router
const baseRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
baseRouter.get('/books', (req, res) => getBookListController.execute(req, res))
// eslint-disable-next-line @typescript-eslint/no-misused-promises
baseRouter.post('/books', (req, res) => createBookController.execute(req, res))

export default baseRouter;
