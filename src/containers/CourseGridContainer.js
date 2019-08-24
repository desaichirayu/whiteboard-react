import React from 'react'
import CourseGridComponent from "../components/CourseGridComponent";

export default class CourseGridContainer extends React.Component {
    render() {
        return <CourseGridComponent courses={this.props.courses} deleteCourse={this.props.deleteCourse} updateCourse={this.props.updateCourse}/>
    }
}