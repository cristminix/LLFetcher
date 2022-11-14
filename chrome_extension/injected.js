window.onload = ()=>{
	
	// localStorage['COURSE_INFO']    = JSON.stringify({slug: });
	// localStorage['COURSE_SECTION'] = JSON.stringify();

	const COURSE_INFO = {
		slug : getCourseSlug(),
		course : getCourseInfo(),
		sections : getCourseSections(),
		bprs : {}
	};
	console.log(COURSE_INFO);
	
	let code = document.createElement('code');
		code.id = 'EXT_COURSE_INFO';
		code.setAttribute('data', JSON.stringify(COURSE_INFO));	
	var node = document.getElementsByTagName('body')[0];
		node.appendChild(code);

		// console.log(code)
};