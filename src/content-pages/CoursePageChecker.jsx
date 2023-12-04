import { useState, useEffect } from "react"
import CheckerTag from "./CheckerTag"
const CoursePageChecker = ({validCoursePage}) => {
	const [checkers, setCheckers] = useState('[]')
	const [tree,setTree] = useState(0)
	const maxTree = 10
	useEffect(()=>{
		console.log(validCoursePage)
		console.log(chrome)
		let tree_ = tree
		tree_ += 1


		// if(tree_ >= maxTree){
		// 	tree_ = 1
		// }
		setTree(tree_)

		buildTree(tree_)

	},[validCoursePage])

	const buildTree = (p) => {
		const newCheckers = []
		let newCheckersP = newCheckers
		console.log(p)
		let childrens = []
		let i = 0
		while(p--){
			console.log(p)
			if(newCheckersP.length === 0){
				childrens.push([])
				newCheckersP.push(childrens[i])
				newCheckersP = childrens[i]

				i++
			}
		}
		let newCheckersStr = JSON.stringify(newCheckers)
		console.log(newCheckersStr)
		setCheckers(newCheckersStr)
		// setTimeout(()=>{
		// 	setCheckers(newCheckers)
		// },1000)
		
	}

	const buildTreeTag = (checker) => {
		const finalText = !validCoursePage ? 'This is not course page' : "This is valid course page"
		return checker.length ?  (<CheckerTag hasChildren={true}>
			{
				buildTreeTag(checker.pop())
			}
		</CheckerTag>):( <CheckerTag hasChildren={false}>{finalText}</CheckerTag>)
	}
	const checker = JSON.parse(checkers)
	return (<>
	{
		buildTreeTag(checker)
	}
	</>)
}

export default CoursePageChecker