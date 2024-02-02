import { useOutlet } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'

const Template = ({store, config})=>{
	const outlet = useOutlet()

	return <div className="app-container w-[300px] py-4 px-2 dark:bg-gray-700 dark:text-gray-200">
		{/* Hello */}
		{outlet||<WelcomePage store={store} config={config}/>}
	</div>
}
export default Template