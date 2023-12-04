const CheckerTag = ({children, hasChildren})=>{
	const cls = hasChildren ? 'course-checker' : 'course-checker-last'

	return (<span className={cls}>{children}</span>)
}

export default CheckerTag