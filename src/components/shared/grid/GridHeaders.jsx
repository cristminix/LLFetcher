const GridHeaders = ({options}) => {
	const tableCls = "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
	const tableHeaderCls = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
	const numberWidthCls = options.numberWidthCls || ''
	const actionWidthCls = options.actionWidthCls || ''
	return (<tr>
      <th scope="col" className={`${numberWidthCls} ${tableHeaderCls}`}>No</th>
      {
      	options.headers.map((caption, index) =>{
      		const tableHeaderWidthCls = options.widthCls[index] || ''
			if(options.callbackHeaders){
				const field = options.fields[index]
				if(options.callbackHeaders[field]){
					caption = options.callbackHeaders[field](field,index,options.fields)
				}
			}
      		return (<th key={index} scope="col" className={`${tableHeaderWidthCls} ${tableHeaderCls}`}>{caption}</th>)
      	})
      }
      <th scope="col" className={`${actionWidthCls} ${tableHeaderCls}`}>Action</th>
    </tr>)
}

export default GridHeaders