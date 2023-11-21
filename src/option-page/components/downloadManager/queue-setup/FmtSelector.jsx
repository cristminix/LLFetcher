const FmtSelector = ({  renderState = false, 
    subRenderState = true,
    loadingFetchToc = false,
    getAvailableFmt = f => f,
    availableFmt = [], 
    selectFmt = "",
    selectedFmt ="",
    setSelectedFmt = f => f,
    finishSetup = f => f}) => {
return renderState ? 
subRenderState?  <>
<div className="flex p-2 px-2">

<Button loading={loadingFetchToc} icon="fa fa-cog" onClick={e=> getAvailableFmt(e)} caption="Get Available Fmt"/>
</div>            </>: <>
<div className="flex p-2 px-2">
<label className={lblCls}>Select Format</label>
<DropdownSelect data={availableFmt} selected={selectedFmt} onSelect={fmt=>setSelectedFmt(fmt)}/>
{/* <Button disabled={selectedFmt==selectFmt} icon="fa fa-save" onClick={e=> finishSetup(e)} caption="Finish Setup"/> */}
</div></>  
: ""

}

export default FmtSelector;