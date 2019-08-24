import React from 'react'
import { Edit, Delete, Check } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const LessonTabItemComponent = ({ state, updateState, deleteLesson, lesson, params, updateLesson, input }) =>
    <li className={`nav-item`}>
        {!state.editing &&
            <div className={`nav-link ${lesson.id == params.lessonId ? 'active' : ''}`}>
                <a href={`/courses/${params.courseId}/modules/${params.moduleId}/lessons/${lesson.id}/topics/1`}
                    style={{ "color": lesson.id == params.lessonId ? 'black' : 'grey' }}>
                    {lesson.title}
                </a>
                <Edit onClick={() => { updateState({ editing: true }) }} className="float-right" />
                <Delete onClick={() => { deleteLesson(lesson.id) }} className="float-right" />
            </div>
        }
        {state.editing &&
            <div className="nav-link">
                <input
                    ref={node => input = node}
                    style={{ 'border': 'none' }}
                    defaultValue={lesson.title}
                    onChange={(e) => updateState({ 'lessonTitle': e.target.value })}
                    className="form-control-sm" />
                <Check onClick={() => { updateState({ editing: false }); updateLesson(lesson.id, lesson) }} className="float-right" />
            </div>
        }
    </li>

export default LessonTabItemComponent;