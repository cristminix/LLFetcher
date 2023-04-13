import {useState, useEffect} from "react"

const AboutPage = ({}) => {
    const [app, setApp] = useState({version:2.0})
    return(<div className="about-page page">
        version <span>{{app.version}}</span>
    </div>)
}

export default AboutPage