import fr from 'fetch-retry'
import { useEffect } from 'react'
import { devApiUrl, messagingUrl } from './fn'
import Button from "../../../components/shared/ux/Button"
import { sendMessage } from '../../../global/fn'

import base64 from 'base-64'
console.log(base64)
// const base64 = base64Module.default
const fetchr = fr(fetch)
// console.log(fetch)

const NativeClient = ({config,store})=>{
    const doFetch=()=>{
        fetchr(messagingUrl('reload'), {
            // mode:'no-cors',
            retries: 3,
            retryDelay: 1000
          }).then(r=>r.text()).then(json=>console.log(json))
    }
    const reloadBg=()=>{
        try{
            sendMessage('nm.reload',null,'background')
        }catch(e){
            console.error(e)
        }
    }
    const sendNativeMessage=(message)=>{
        try{
            sendMessage(`nm.${message}`,null,'background')
        }catch(e){
            console.error(e)
        }
    }
    useEffect(f=>{
        // doFetch()
        console.log(base64.encode('hello'))
    },[])
    return <>
    <h4 className="font-bold">Native Client</h4>
    <div className='flex gap-2 p-2'>
        <Button caption='Reload' onClick={e=>doFetch()}/>
        <Button caption='Reload Background' onClick={e=>reloadBg()}/>
        <Button caption='Custom Background' onClick={e=>sendNativeMessage('custom')}/>
    </div>
    </>
}

export default NativeClient
