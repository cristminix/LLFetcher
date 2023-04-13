console.log('app.jsx')
const App = ()=>{
	const getData = () => {
		console.log(chrome)
		createDataCodes()
	}
	return (<div>
			<h1><button id="getData" onClick={e=>{getData()}}>Get Data</button></h1>
		</div>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)