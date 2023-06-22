import { Link, NavLink } from 'react-router-dom';

const LatestCourse = ({store}) => {
    const courses = store.mCourse.getList()
    const navLinkCls = ""
    console.log(courses)
    return <>
        <ul>
        {
            courses.map((course, index) => {
                const coursePath = `/course/${course.slug}`
                const courseIcon = "bi bi-bookmark"
                return <li key={index}>        
                    <NavLink className={navLinkCls} to={coursePath} >
                        <i className={courseIcon}></i> <span>{course.title}</span>
                    </NavLink>
                </li>
            })
        }
        </ul>
    </>
}

const WelcomePage = ({store}) => {

    return (<><div className="welcomepage">
        <span>This is this last courses</span>
        <LatestCourse store={store}/>
    </div></>)
}

export default WelcomePage
    