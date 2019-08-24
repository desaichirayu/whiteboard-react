import React from 'react'
import CourseListComponent from '../components/CourseListComponent'
import CourseService from '../services/CourseService'

export default class CourseListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.getInstance();
        this.state = {
            course: {
                "title": "CS6140 Machine Learning",
                "owner": "me",
                "modified": "5/27/2019, 5:30:59 PM"
            },
            courses: [],
            view: "List"
        };
        this.courseService.findAllCourses().then(courses => this.setState({courses: courses}));
    }

    deleteCourse = (id) => {
        this.courseService.deleteCourse(id, () => this.courseService.findAllCourses()).then(courses => this.setState({courses: courses}));
    };

    updateCourse = (id, course) => {
        this.courseService.updateCourse(id, course, () => this.courseService.findAllCourses()).then(courses => this.setState({courses: courses}));
    };

    titleChanged = (event) => {
        let newDate = new Date();
        this.setState({
            course: {
                "title": event.target.value,
                "owner": "me",
                "modified": newDate.toLocaleString()
            }
        })
    };

    toggleView = (event) => {
        let ref = event.target;
        if (event.target.id == "") {
            ref = event.target.parentNode;
        }
        this.setState({
            view: ref.id
        })
    };


    createCourse = () => {
        this.courseService.createCourse(this.state.course).then(courses => this.setState({courses: courses}));
    };

    render() {
        return (
            <CourseListComponent courses={this.state.courses}
                titleChanged={this.titleChanged}
                view={this.state.view}
                toggleView={this.toggleView}
                createCourse={this.createCourse}
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}/>
        )
    }
}