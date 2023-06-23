import {  RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,Route,Routes ,createHashRouter} from 'react-router-dom'
import Template from "./Template"

import WelcomePage from "./components/WelcomePage"
import CoursePage, {loader as courseLoader} from "./components/CoursePage"
import DownloadPage from "./components/DownloadPage"
import SettingPage from "./components/SettingPage"
import DatabasePage from "./components/DatabasePage"
import BootstrapIcons,{loader as bootstrapIconLoader} from "./components/BootstrapIcons"

import ErrorPage from "./ErrorPage"

export default function Router({config, store}){
        
    const router = createHashRouter(
            createRoutesFromElements(
            <Route path="/" errorElement={<ErrorPage />} element={<Template config={config}/>}>

                {/* <Route exac path="/tts" element={<Tts config={config} />}></Route> */}
                <Route  path="/welcome" element={<WelcomePage store={store} />}/>
                <Route  path="/course" element={<CoursePage store={store}/>} loader={courseLoader}/>
                <Route  path="/course/:slug" element={<CoursePage store={store}/>} loader={courseLoader}/>
                <Route  path="/download" element={<DownloadPage store={store}/>}/>
                <Route  path="/setting" element={<SettingPage store={store}/>}/>
                <Route  path="/database" element={<DatabasePage store={store}/>}/>
                    
               
                {/* <Route  path="/book" element={<Book/>}></Route>
                <Route  path="/puppeteer" element={<Puppeteer/>}>
                    
                </Route> */}
                <Route  path="/bootstrap-icons" loader={bootstrapIconLoader} element={<BootstrapIcons/>}></Route>
                <Route  path="/bootstrap-icons/page/:pageNumber" loader={bootstrapIconLoader} element={<BootstrapIcons/>}></Route>
                {/* <Route  path="/settings" element={<Preferences config={config}/>}>
                    <Route exac path="/preferences/tts-server" loader={ttsServerPrefTabLoader} element={<TtsServerPrefTab config={config}/>}/>
                    <Route index exac path="/preferences/tts-server/page/:pageNumber" loader={ttsServerPrefTabLoader} element={<TtsServerPrefTab config={config}/>}/>
                    
                </Route> */}
            </Route>
                

            )
        )
    return(<RouterProvider router={router}/>)
}