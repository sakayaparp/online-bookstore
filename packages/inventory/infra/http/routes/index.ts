
import * as express from 'express'
import { createBookController } from '../../../domain/use-cases/create-book';
import { getBookListController } from '../../../domain/use-cases/getBookList';

const bookRouter = express.Router();

bookRouter.post('/',
  (req, res) => createBookController.execute(req, res)
);

bookRouter.get('/', 
  (req, res) => getBookListController.execute(req, res)
);

export { bookRouter };