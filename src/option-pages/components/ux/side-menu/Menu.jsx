import {cls14, cls15,cls16,cls22,cls23,cls24, cls25,cls17,cls18,cls19,cls20,cls27} from "../cls"
import { Link, NavLink } from 'react-router-dom';

const MenuItem = ({hasChild, title, path, icon,  name,childrens, index}) => {
    return <>
    {
        hasChild?<>
        <li id={`${name}-accordion`} className={cls17} key={name}> 
        <button type="button" className={cls18}> 
            <i className={icon}></i>{title}
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls19}> <path d="m18 15-6-6-6 6"> </path> </svg> 
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls20}> <path d="m6 9 6 6 6-6"> </path> </svg> 
             </button> 
             <div id={`${name}-accordion-sub`} className={cls25}> 
                     <ul  data-hs-accordion-always-open={true} className={cls22}> 
                     {
                        Object.keys(childrens).map((key, index) => {
                            const item_ = childrens[key]
                            const childrens_ = item_.childItems || {}
                            console.log(item_)
                            return <MenuItem childrens={childrens_} name={key} index={index} hasChild={item_.hasChild} title={item_.title} path={item_.path} icon={item_.iconCls} />
        
                        })
                     }
                       
                </ul>
            </div>
        </li>        
        </>:<><li key={name}>   
            <NavLink to={path}  className={cls27}> 
                <i className={icon}></i>{title}
            </NavLink> </li> 
        </>
    }
    </>
}
const Menu = ({data, store, config}) => {
    const getChildrenByModel = (item) => {
        let childrens = {}
        if(item.model){
            const modelName = item.model
            const modelObj = store.get(modelName)
            if(modelObj){
              if(item.modelListMethod){
                const listMethod = item.modelListMethod
               
                try{
                  const childData =  modelObj[listMethod]()
                  for(const cItem of childData){
                    const title = cItem[item.displayField]
                    const slug = cItem[item.slugField]
                    const path = item.childRoutePath.replace(/{SLUG_VALUE}/,slug)
                    childrens[slug] = {
                        title,
                        name: slug,
                        path,
                        iconCls: item.iconCls                        
                    }
                  }
                 
                }catch(e){
                  console.error(e)
                }
                
              }
               
            }
        }
        console.log(childrens)
        return childrens
    }
    return (<>
    <ul className={cls14}> 
    {
        Object.keys(data).map((key, index) => {
            const item = data[key]
            let childrens = item.childItems || {}
            console.log(item)
            if(item.hidden){
                return null
            }
            const useModel = item.useModel || false
            if(useModel){
                childrens = getChildrenByModel(item)
                item.hasChild = Object.keys(childrens).length > 0
            }
            return <MenuItem childrens={childrens} name={key} index={index} hasChild={item.hasChild} title={item.title} path={item.path} icon={item.iconCls} />
        })
    }
    </ul>
    </>)
}

export default Menu
    