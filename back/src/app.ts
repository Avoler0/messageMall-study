import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import messageRouter from './routers/messageRouter';

const app:Express = express();
const corsOptions = {
  origin:'http://localhost:5173',
  credentials:true
}

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(cors(corsOptions));


// Router 부분
// app.use('/empty', (req:Request,res:Response, next) => {
//   console.log('미들웨어입니다.');
//   next();
// })
app.get('/', function(req, res){
    res.send('Hello World');
});
app.use('/empty', messageRouter)

export default app;