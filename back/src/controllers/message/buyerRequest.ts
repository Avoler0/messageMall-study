import { Request, Response } from 'express';


export function get_BuyerRequestGet(req:Request,res:Response){
  console.log('Get 바이어 요청')
  
  res.status(200).send('success')
}

export function post_BuyerRequestGet(req:Request,res:Response){
  console.log('Post 바이어 요청')

  res.status(200).send('success')
}