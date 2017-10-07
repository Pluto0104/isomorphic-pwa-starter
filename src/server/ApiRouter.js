import express from 'express';
import ItemController from './controllers/ItemController';

const ApiRouter = express.Router();

ApiRouter
    .route('/items')
    .get(ItemController.index)
    .post(ItemController.create);

ApiRouter
    .route('/items/:id')
    .get(ItemController.read)
    .put(ItemController.update)
    .delete(ItemController.delete);

export default ApiRouter;
