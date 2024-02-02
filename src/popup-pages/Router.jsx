import {  RouterProvider,
    createRoutesFromElements,
    Route ,createHashRouter
} from 'react-router-dom'
// import Pop from "./Template"
import Template from './Template'
import WelcomePage, {loader as welcomeLoader}  from "./components/WelcomePage"
import ErrorPage from "./ErrorPage"
import NativeClientHttp from './components/NativeClientHttp'

export default function Router({config, store}){
        
    const router = createHashRouter(
            createRoutesFromElements(
            <Route path="/"errorElement={<ErrorPage/>} element={<Template config={config} store={store}/>}>
                <Route  path="/welcome" element={<WelcomePage store={store} config={config}/>} />
                <Route  path="/native-client-http" element={<NativeClientHttp store={store} config={config}/>} />
                
            </Route>
                

            )
        )
    return(<RouterProvider router={router}/>)
}