import React from 'react'
import CourseService from "../services/CourseService";
import CourseRowComponent from "../components/CourseRowComponent";

export default class CourseRowContainer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            course: props.course,
            editing: false
        }
    }

    updateEditingState = newState => {
        if (newState.courseTitle) {
            newState['course'] = this.state.course;
            newState.course.title = newState.courseTitle;
        }
        this.setState(newState)
    }

    render() {
        return (
            <CourseRowComponent 
            state={this.state}
            updateEditingState={this.updateEditingState}
            course={this.state.course} 
            deleteCourse={this.props.deleteCourse}
            updateCourse={this.props.updateCourse}
            editing={this.state.editing} />
        )
    }
}