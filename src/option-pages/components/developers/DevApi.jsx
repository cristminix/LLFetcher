import fr from 'fetch-retry'
import { useEffect } from 'react'
import { devApiUrl } from './fn'
const fetchr = fr(fetch)
// console.log(fetch)

const DevApi = ({config,store})=>{
    const doFetch=()=>{
        fetchr(devApiUrl('course-info-ds.xml'), {
            // mode:'no-cors',
            retries: 3,
            retryDelay: 1000
          }).then(r=>r.text()).then(json=>console.log(json))
    }
    useEffect(f=>{
        doFetch()
    },[])
    return <>
    <h4 className="font-bold">Dev Api</h4>
    </>
}

export default DevApi
