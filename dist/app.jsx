console.log('app.jsx')
const App = ()=>{
	return (<div>
			<h1>Hello World</h1>
		</div>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)