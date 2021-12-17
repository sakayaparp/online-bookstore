
import express from 'express'
import { bookRouter } from '../routes';


const v1Router = express.Router();

v1Router.use('/books', bookRouter);

export { v1Router }