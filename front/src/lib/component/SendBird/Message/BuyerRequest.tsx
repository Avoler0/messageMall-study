import { FormEvent, ReactElement } from "react"
import { postBuyerRequest } from "../../../server/message"



function BuyerRequest(){

  const submit = (e:React.SyntheticEvent) =>{
    e.preventDefault()
    const target = e.target as typeof e.target & {
      address: { value: string }
    }
    const address = target.address.value;
    console.log('임시')

    postBuyerRequest('.')
  }

  return(
    <div className='request h-full font-sans'>
      <form className='px-12 py-2 mt-2 text-center text-gray-600' onSubmit={submit}>
        <div className='my-4'>
          <label className='block focus:border-0'>상품 URL</label>
          <input name='productUrl' type='text' className='px-4 py-2 border border-zinc-200 rounded focus:outline focus:outline-1 focus:outline-zinc-300'/>
        </div>
        <div className='my-2'>
          <label className='block'>원하는 가격</label>
          <div className="flex justify-between">
            <button className='p-2 border-1 bg-blue-300 rounded mr-2'>직접 제안</button>
            <button className='p-2 border-1 bg-blue-300 rounded'>제안 받기</button>
          </div>
        </div>
        <div className='my-2'>
          <label className='block'>배송 받을 주소</label>
          <input name='address' type='text' className='px-4 py-2 border border-zinc-200 rounded focus:outline focus:outline-1 focus:outline-zinc-300' />
        </div>
        <div className='my-2'>
          <label className='block'>개인통관번호</label>
          <input name='customsId' type='text' className='px-4 py-2 border border-zinc-200 rounded focus:outline focus:outline-1 focus:outline-zinc-300' />
        </div>
        <div className='my-2'>
          <label className='block'>추가 요청사항</label>
          <textarea name='request' className='px-4 py-2 border border-zinc-200 rounded focus:outline focus:outline-1 focus:outline-zinc-300'/>
        </div>
        <div>
          <button>임시 버튼</button>
        </div>
      </form>
    </div>
  )
}


export default BuyerRequest