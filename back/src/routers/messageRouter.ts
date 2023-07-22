import express from 'express';
import { get_BuyerRequestGet, post_BuyerRequestGet } from '../controllers/message/buyerRequest';

const messageRouter = express();

messageRouter.get('/gg', get_BuyerRequestGet)
messageRouter.post('/pp', post_BuyerRequestGet)


export default messageRouter;