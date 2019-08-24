import React from 'react'
import CourseCardContainer from "../containers/CourseCardContainer";
import '../styles/GridLayoutStyles.scss'

const CourseGridComponent = ({courses, deleteCourse, updateCourse}) =>
        <div className="card-columns">
            {
                courses.map(course =>
                    <CourseCardContainer course={course} key={course.id} deleteCourse={deleteCourse} updateCourse={updateCourse}/>
                )
            }
        </div>


export default CourseGridComponent