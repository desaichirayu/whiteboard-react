import React from 'react'
import CourseListContainer from '../containers/CourseListContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CourseEditorContainer from '../containers/CourseEditorContainer'
import { CalendarToday, AddCircle } from '@material-ui/icons'
import WidgetListMasterContainer from "../containers/WidgetListMasterContainer";

class WhiteBoard extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#"> <CalendarToday /> WhiteBoard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="/courses"> Courses <span
                                    className="sr-only">(current)</span></a>
                            </div>
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="/widgets"> Widgets <span
                                    className="sr-only">(current)</span></a>
                            </div>
                        </div>
                    </nav>
                    <Route
                        exact={true}
                        path="/widgets"
                        component={() => <WidgetListMasterContainer topicId={"1"}/>} />

                    <Route
                        exact={true}
                        path="/courses"
                        component={CourseListContainer} />

                    <Route
                        path="/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                        component={CourseEditorContainer} />
                    {/*<a href="#"><AddCircle style={{fontSize: "48px", "position": "fixed", "bottom": "1%", "right": "1%", "color": "red"}}/></a>*/}
                </div>
            </Router>
        )
    }
}

export default WhiteBoard;