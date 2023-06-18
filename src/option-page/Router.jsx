import {  RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,Route,Routes ,createHashRouter} from 'react-router-dom'
import Template from "./Template"

import WelcomePage from "./components/WelcomePage"
import BootstrapIcons,{loader as bootstrapIconLoader} from "./components/BootstrapIcons"

import ErrorPage from "./ErrorPage"

export default function Router({config}){
        
    const router = createHashRouter(
            createRoutesFromElements(
            <Route path="/" errorElement={<ErrorPage />} element={<Template config={config}/>}>

                {/* <Route exac path="/tts" element={<Tts config={config} />}></Route> */}
                <Route  path="/welcome" element={<WelcomePage/>} index={true}>
                    
                </Route>
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