const ValidationErrIcon = ({absolute="yes"})=>{
    return <div className={`${absolute=="yes"?'absolute':''} inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>

    <svg className="flex-shrink-0 size-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
    </div>
}
const ValidationSuccessIcon = ({absolute="yes"})=>{
    return <div className={`${absolute=="yes"?'absolute':''} inset-y-0 end-0 flex items-center pointer-events-none pe-3`}>
    <svg className="flex-shrink-0 size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </div>
}

export {
    ValidationErrIcon,
    ValidationSuccessIcon
}