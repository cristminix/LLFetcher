import {useState, useEffect} from "react"

const TocItem = ({items, sectionIndex}) => {
	const [hideCheckAll, setHideCheckAll] = useState(false)
	const [checkAll, setCheckAll] = useState(false)
	const [checkedQueues, setCheckedQueues] = useState([])
	const [enableQueue, setEnableQueue] = useState(true)
	const onFetchUpdate = async(evt) => {
		console.log(evt)
	}
	const tgQueue = async() => {

	}
	const onCheckAll = async() => {
		
	}
	return(<><div class="toc-item-view">
    <table class="toc-item-list">
        {
        	!hideCheckAll ? (<thead v-if="!hideCheckAll">
					            <tr>
					                <th colspan="2">
					                	<label>
					                		<input  onClick={e => onCheckAll()} 
								                	checked={checkAll} 
								                	classname="form-check-input" 
								                	type="checkbox"/> <span style={{paddingLeft :".5em"}}>Check All</span>
					                	</label>
					                </th>
					               
					                <th></th>
					                <th className="text-center" style={{width:'80px'}}></th>
					            </tr>
					        </thead>) : ""
        }
        
        <tbody>
        {
        	items.map((toc, index) => {
        		return(<tr className={"toc-item " + ((index+1) % 2 === 0 ? 'odd' : 'even')} 
        				   key={index}>
				            <td className="fcc">
				                <input  onClick={e => tgQueue(index)} 
				                		classname="form-check-input" 
				                		type="checkbox" 
				                		checked={checkedQueues[index]}
				                		onChange={f=>f}/> 
				            </td>
				            <td style={{paddingLeft : ".5em"}}>{toc.title}</td>
				            <td colspan="2" style={{textAlign: "right"}}>
				                <FetchButton update={onFetchUpdate} 
							                sectionIndex={sectionIndex} 
							                tocIndex={index} 
							                toc={toc} 
							                queue={enableQueue}
							                exclude={toc.streamLocationIds.length > 0} 
				                />
				            </td>
					</tr>)
        	})
        }
        
        </tbody>
    </table>
  </div></>)
}

export default TocItem