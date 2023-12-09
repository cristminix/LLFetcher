import { useEffect, useRef } from "react"
import DropdownMenu from "../../components/shared/ux/DropdownMenu"
import AdvancedSelect from "../../components/shared/ux/AdvancedSelect"

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
        <AdvancedSelect data={[{value:"test",text:"Hello"}]} label="Choose"/>
    </div>
    <div className="w-full p-4">
        Setting Page
    <button id="testBtn" onClick={testFs}>Open File</button>
    </div>
    
    </>
}

export default SettingPage