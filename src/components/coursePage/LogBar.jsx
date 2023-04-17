import {useState, useEffect} from "react"

const LogBar  = ({mode, message}) => {
	const modeCls = mode === 1 ? 'error' : mode === 0 ? 'success' : mode === 2 ? 'warning': ''
	return(<><div class="log-bar">
        <div className={`log-message ${modeCls}`}>
            <span>{{message}}</span>
        </div>
    </div></>)
}

export default LogBar