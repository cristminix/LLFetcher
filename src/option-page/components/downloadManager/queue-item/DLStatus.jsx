const DLStatus = ({type, status}) => {
    return <div className="">
    {
        status == 2 ? <>
            <i className="fa fa-check text-green-500"/>
        </> : <>
            {
                status == 1 ? <>
                    <i className="fa fa-spin fa-spinner"/>
                    
                </>:<>
                    {
                        status == -1 ? <>
                            <i className="fa fa-exclamation-circle text-red-500"/>
                            
                        </>:<>{''}</>
                    }
                </>
            }
        </>    
    } 
    {/* <div>{status}</div> */}
   </div>
}

export default DLStatus;