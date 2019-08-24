import React from 'react'
import CourseRowContainer from "../containers/CourseRowContainer";
import CourseGridContainer from "../containers/CourseGridContainer";

const CourseTableComponent = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <div className="list-group">
            {
                courses.map(course =>
                    <CourseRowContainer course={course} key={course.id} deleteCourse={deleteCourse} updateCourse={updateCourse}/>
                )
            }
        </div>
    </div>

export default CourseTableComponent