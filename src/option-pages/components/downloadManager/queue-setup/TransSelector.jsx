const TransSelector = ({  renderState = false, 
    subRenderState = true,
    loadingFetchToc = false,
    getAvailableTrans = f => f,
    availableTrans = [], 
    selectTrans = "",
    selectedTrans ="",
    setSelectedTrans = f => f,
    finishSetup = f => f}) => {
return renderState ? 
subRenderState?  <>
<div className="flex p-2 px-2">

<Button loading={loadingFetchToc} icon="fa fa-cog" onClick={e=> getAvailableTrans(e)} caption="Get Available Trans"/>
</div>            </>: <>
<div className="flex p-2 px-2">
<label className={lblCls}>Select Transcript Language</label>
<DropdownSelect data={availableTrans} selected={selectedTrans} onSelect={trans=>setSelectedTrans(trans)}/>
{/* <Button disabled={selectedTrans==selectTrans} icon="fa fa-save" onClick={e=> finishSetup(e)} caption="Finish Setup"/> */}
</div></>  
: ""

}

export default TransSelector;