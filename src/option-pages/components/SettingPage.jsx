import { useEffect, useRef } from "react"
import DropdownMenu from "../../components/shared/ux/DropdownMenu"

const SettingPage = () => {
    const testBtn = useRef(null)
    const testFs = async()=> {
        let fileHandle;
        // const testBtn = document.getElementById('testBtn')
        // testBtn.addEventListener('click', async () => {
        // Destructure the one-element array.
        [fileHandle] = await window.showOpenFilePicker();
        console.log(fileHandle)    
        const file = await fileHandle.getFile();
        const contents = await file.text()     
        console.log(contents)  
        // Do something with the file handle.
        // });
    }
    useEffect(()=>{
        // testFs()
    },[])
    return <>
    <div className="w-full p-4">
        <DropdownMenu data={[{value:"test",text:"Test",icon:"fa fa-check"}]} label="Test" labelIcon="fa fa-check" />
    </div>
    <div className="w-full p-4">
        Setting Page
    <button id="testBtn" onClick={testFs}>Open File</button>
    </div>
    <div className="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-unstyled" type="button" className="hs-dropdown-toggle inline-flex justify-center items-center gap-x-2">
    Actions
  </button>

  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white" aria-labelledby="hs-dropdown-unstyled">
    <a className="block" href="#">Newsletter</a>
    <a className="block" href="#">Purchases</a>
    <a className="block" href="#">Downloads</a>
    <a className="block" href="#">Team Account</a>
  </div>
</div>
    </>
}

export default SettingPage