import React from 'react'
import { Add } from '@material-ui/icons'
import LessonTabItemContainer from "../containers/LessonTabItemContainer";
const LessonTabComponent = ({ course, lessons, deleteLesson, createLesson, titleChanged, updateLesson, clearInput, params }) =>
    <div className="border border-light rounded row">
        <ul className="nav nav-tabs nav-fill col-12">
            {
                lessons.map(lesson =>
                    <LessonTabItemContainer
                        key={lesson.id}
                        lesson={lesson}
                        params={params}
                        deleteLesson={deleteLesson}
                        updateLesson={updateLesson} />
                )
            }
            <li className="nav-item float-right">
                <span className="form-control">
                    <input onChange={titleChanged} placeholder="New Lesson" />
                    <Add onClick={() => { createLesson() }} />
                </span>
            </li>
        </ul>
    </div>

export default LessonTabComponent