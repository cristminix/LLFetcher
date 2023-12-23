import {  RouterProvider,
    createRoutesFromElements,
    Route ,createHashRouter
} from 'react-router-dom'
import Template from "./Template"

// import WelcomePage from "./components/WelcomePage"
import CoursePage, {loader as courseLoader} from "./components/CoursePage"
// import DownloadPage from "./components/DownloadPage"
import DownloadManager, {loader as courseSlugLoader} from "./components/DownloadManager"
import SettingPage from "./components/SettingPage"
import DatabasePage, {loader as databaseLoader} from "./components/DatabasePage"
// import BootstrapIcons,{loader as bootstrapIconLoader} from "./components/BootstrapIcons"
// import TestPage, {loader as testPageLoader} from "./components/TestPage"
import DeveloperPage,{loader as developerPageLoader} from './components/DeveloperPage'
import ErrorPage from "./ErrorPage"

export default function Router({config, store}){
        
    const router = createHashRouter(
            createRoutesFromElements(
            <Route path="/" errorElement={<ErrorPage />} element={<Template config={config} store={store}/>}>

                {/* <Route exac path="/tts" element={<Tts config={config} />}></Route> */}
                {/* <Route  path="/welcome" element={<WelcomePage store={store} />}/> */}
                <Route  path="/course" element={<CoursePage store={store}/>} loader={courseLoader}/>
                <Route  path="/course/:ctl/:slug" element={<CoursePage store={store} config={config}/>} loader={courseLoader}/>
                <Route  path="/manager/:slug" element={<DownloadManager store={store}/>} loader={courseSlugLoader}/>
                <Route  path="/manager" index={true} element={<DownloadManager store={store}/>} loader={courseSlugLoader}/>
                {/* <Route  path="/download" element={<DownloadPage store={store}/>}/> */}
                <Route  path="/setting" element={<SettingPage store={store}/>}/>
                <Route  path="/database" element={<DatabasePage store={store} config={config}/>} loader={databaseLoader}/>
                <Route  path="/database/:table" element={<DatabasePage store={store} config={config}/>} loader={databaseLoader}/>
                <Route  path="/database/:table/:page" element={<DatabasePage store={store} />} loader={databaseLoader}/>
                <Route  path="/database" element={<DatabasePage store={store} />}/>
                <Route  path="/developer" element={<DeveloperPage store={store} config={config}/>} loader={developerPageLoader}/>
                <Route  path="/developer/:page" element={<DeveloperPage store={store} config={config}/>} loader={developerPageLoader}/>
                {/* <Route  path="/tests"  loader={testPageLoader} element={<TestPage store={store}/>}/> */}
                {/* <Route  path="/tests/:page"  loader={testPageLoader} element={<TestPage store={store} />}/> */}
                    
               
                {/* <Route  path="/book" element={<Book/>}></Route>
                <Route  path="/puppeteer" element={<Puppeteer/>}>
                    
                </Route> */}
                {/* <Route  path="/bootstrap-icons" loader={bootstrapIconLoader} element={<BootstrapIcons/>}></Route> */}
                {/* <Route  path="/bootstrap-icons/page/:pageNumber" loader={bootstrapIconLoader} element={<BootstrapIcons/>}></Route> */}
                {/* <Route  path="/settings" element={<Preferences config={config}/>}>
                    <Route exac path="/preferences/tts-server" loader={ttsServerPrefTabLoader} element={<TtsServerPrefTab config={config}/>}/>
                    <Route index exac path="/preferences/tts-server/page/:pageNumber" loader={ttsServerPrefTabLoader} element={<TtsServerPrefTab config={config}/>}/>
                    
                </Route> */}
            </Route>
                

            )
        )
    return(<RouterProvider router={router}/>)
}