import React from 'react'
import { LibraryBooks, Delete, Edit, Check } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const CourseRowComponent = ({ state, course, deleteCourse, updateCourse, updateEditingState, input }) =>
    <div>
        <div className="list-group-item">
            {!state.editing &&
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}
                                    key={course.id} style={{ color: "inherit" }}>
                                    <LibraryBooks /> {course.title}
                                </a>
                            </div>
                            <div className="col-2 d-none d-sm-block">
                                {course.owner}
                            </div>
                            <div className="col-2 d-none d-sm-block">{course.modified}</div>
                            <div className="col-2 d-none d-sm-block">
                                <Edit onClick={() => { updateEditingState({ editing: true }) }} style={{ color: "inherit" }}/>
                                <Delete onClick={() => deleteCourse(course.id)} style={{ color: "inherit" }} />
                            </div>
                        </div>
                    </div>
                </div>

            }
            {state.editing &&
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <input
                                    ref={node => input = node}
                                    style={{ 'border': 'none' }}
                                    defaultValue={course.title}
                                    onChange={(e) => updateEditingState({ 'courseTitle': e.target.value })}
                                    className="form-control-sm" />
                            </div>
                            <div className="col-2 d-none d-sm-block">
                                {course.owner}
                            </div>
                            <div className="col-2 d-none d-sm-block">{course.modified}</div>
                            <div className="col-2 d-none d-sm-block">
                                <Check onClick={() => { updateEditingState({ editing: false }); updateCourse(course.id, course) }} style={{ color: "inherit" }}/>
                                <Delete onClick={() => deleteCourse(course.id)} style={{ color: "inherit" }} />
                            </div>
                        </div>
                    </div>
                </div>

            }

        </div>
    </div>


export default CourseRowComponent