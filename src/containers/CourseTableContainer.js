import React from 'react'
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridContainer from "./CourseGridContainer";

export default class CourseTableContainer extends React.Component {
    render() {
        return <CourseTableComponent courses={this.props.courses} deleteCourse={this.props.deleteCourse}  updateCourse={this.props.updateCourse}/>
    }
}