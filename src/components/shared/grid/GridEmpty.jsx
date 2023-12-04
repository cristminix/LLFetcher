const GridItemEmpty = ({spanCls, limit,  options}) => {
	// console.log(options)
	const colSpan = options.fields.length + 2
	// const arrLength = lastLength ? lastLength : limit
	const dummyRecords =[0]
	return(<>
		{
			dummyRecords.map((value,index)=>{
				return (<tr className="" key={index}>
		          			<td colSpan={colSpan}><span className="">No records</span></td>
		          		</tr>)
			})
		}
	</>)
}

export default GridItemEmpty