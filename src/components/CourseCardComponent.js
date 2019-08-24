import React from 'react'
import {LibraryBooks, Delete, Edit, Check} from '@material-ui/icons'
import {Link} from 'react-router-dom'

const CourseCardComponent = ({state, course, deleteCourse, updateCourse, updateEditingState, input}) =>
        <div className="card">
            {!state.editing &&
                <div>
                    <img className="card-img-top" src="https://picsum.photos/300/200" alt="Card image cap"/>
                    <div className="card-body">
                        <div className="card-title">
                            <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}
                               key={course.id} style={{ color: "inherit"}}>
                                <LibraryBooks/> {course.title}
                            </a>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"><span>
                                Modified: {course.modified}
                            <Edit onClick={() => { updateEditingState({ editing: true }) }} style={{ color: "inherit" }}/>
                            <Delete className="float-right" onClick={()=> deleteCourse(course.id)} style={{ color: "inherit"}}/>
                        </span>
                            </small>
                        </div>
                    </div>
                </div>
            }
            {state.editing &&
            <div>
                <img className="card-img-top" src="https://picsum.photos/300/200" alt="Card image cap"/>
                <div className="card-body">
                    <div className="card-title">
                        <input
                            ref={node => input = node}
                            style={{ 'border': 'none' }}
                            defaultValue={course.title}
                            onChange={(e) => updateEditingState({ 'courseTitle': e.target.value })}
                            className="form-control-sm" />
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><span>
                                Modified: {course.modified}
                            <Check onClick={() => { updateEditingState({ editing: false }); updateCourse(course.id, course) }} style={{ color: "inherit" }}/>
                            <Delete onClick={() => deleteCourse(course.id)} style={{ color: "inherit" }} />

                        </span>
                        </small>
                    </div>
                </div>
            </div>
            }
        </div>


export default CourseCardComponent