import ExampleContent from "./ExampleContent"




const Content = ({store, config}) => {
    return (<>
     {/*<!-- Content -->*/} 
     <ExampleContent store={store} config={config}/>
     {/*<!-- End Content -->*/} </>)
}

export default Content
    