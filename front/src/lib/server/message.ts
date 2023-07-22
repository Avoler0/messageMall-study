import instance from "./init";

export function postBuyerRequest(data){
  console.log('포스트 리퀘스트')
  instance.get('/empty/gg',data)
  .then((res)=>{
    console.log(res)
  })
}