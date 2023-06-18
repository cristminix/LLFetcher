import {useState, useEffect} from "react"
import bootstrapIcons from "bootstrap-icons/font/bootstrap-icons.json"
import {useLoaderData} from "react-router-dom"
import {makeDelay, timeout} from "../../components/fn"
import Pager, {ArrayPager} from "./Pager"

const HSClipboard = {}
const delay = makeDelay(1000)

export async function loader({ params }) {
  const pageNumber = parseInt(params.pageNumber) || 1;
  return { pageNumber };
}

let firstTimer = true
const BootstrapIcons = ({}) => {
	const {pageNumber} = useLoaderData()
	const hideSidebar = false
	const cls = "dark:text-white"
	const [icons,setIcons] = useState([])
	const [filter,setFilter] = useState([])
	const [bootstrapIconsArr,setBootstrapIconsArr] = useState(null)
	const [page,setPage] = useState([1])
	// const rowCount = Math.ceil(icons.length/100)
	// let bootstrapIconsArr = new ArrayPager(['test'],1)

	useEffect(()=>{
		delay(()=>{
			if(bootstrapIconsArr == null){
				console.log('A')
				setBootstrapIconsArr(new ArrayPager(Object.keys(bootstrapIcons),192))
			}
			setPage(1)
		document.body.style['overflow-x'] = "hidden"
		})
	},[])

	useEffect(()=>{
		document.title = "Bootstrap Icons"	
		
		if(!bootstrapIconsArr){
			return
		} 
		HSClipboard.collection = []
		setIcons(bootstrapIconsArr.fetch(page, filter))
		setTimeout(()=>{
			HSClipboard.init('.js-clipboard')
		},1000)
	},[page, bootstrapIconsArr, filter])

	useEffect(()=>{
		setPage(pageNumber)
	},[pageNumber])

	const onCopy = async(evt) => {
		await timeout(3000)
		evt.preventDefault()
	}
	const onFilter = async(evt) =>{
		delay(()=>{
			let query = evt.target.value
			if(query.length == 0)
				query = false
			setFilter(query)
			console.log(query)
			HSClipboard.collection = []
			setIcons(bootstrapIconsArr.fetch(page, query)) 
			setTimeout(()=>{
				HSClipboard.init('.js-clipboard')
			},3000)
		})
	}
	return(<>
		<main>
		<div className={"search-container py-3 mb-4"}>
		<div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
		  <label htmlFor="inline-input-label-with-helper-text" className="block text-sm font-medium mb-2 dark:text-white">Filter</label>
		  <input autoComplete="off" onChange={e=>onFilter(e)} type="text" id="inline-input-label-with-helper-text" className="py-3 px-4 block w-4/5 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="boostrap" aria-describedby="hs-inline-input-helper-text"/>
		  <p className="text-sm text-gray-500 mt-2" id="hs-inline-input-helper-text">Enter search here</p>
		</div>
		</div>
			<div className={`w-full columns-1 overflow-x-hidden`}>
				{ icons ?
					icons.map((icon,index)=>{
						const origIcon = icon
						const iconNumMatch = icon.match(/^\d+-(.*)-\d+$/)
						if(iconNumMatch){
							icon = iconNumMatch[1]
						}
						const iconNumMatch2 = icon.match(/^([a-z]*-)(.*)-\d+$/)
						if(iconNumMatch2){
							icon = iconNumMatch2[1]+iconNumMatch2[2]
						}
						return(<div className="gap-1 hs-tooltip inline-block  [--trigger:click] [--placement:right]" key={index}>
								  <a className="hs-tooltip-toggle block text-center" href={`#/bootstrap-icons/${icon}`} onClick={e=>e.preventDefault()}>
								    <span className="tooltip">
								      <i className={`bi bi-${icon}`}></i>
								    </span>
								    
								  </a>

						</div>)
					}):""
				}	
			</div>
			<div className="pager-container p-4">
				{bootstrapIconsArr && icons ?(<Pager page={page} total_pages={bootstrapIconsArr.getTotalPages(filter)} path={`/bootstrap-icons`}/>):""
				}

			</div>
		</main>
	</>)
}

export default BootstrapIcons;