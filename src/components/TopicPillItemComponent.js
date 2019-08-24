import React from 'react'
import { Edit, Delete, Check } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const TopicPillItemComponent = ({ state, updateState, deleteTopic, topic, params, updateTopic, input }) =>
    <li className={`nav-item`}>
        {!state.editing &&
            <div className={`nav-link ${topic.id == params.topicId ? 'active' : ''}`}>
                <a href={`/courses/${params.courseId}/modules/${params.moduleId}/lessons/${params.lessonId}/topics/${topic.id}`}
                    style={{ "color": topic.id == params.topicId ? 'white' : 'black' }}>
                    {topic.title}
                </a>
                <Edit onClick={() => { updateState({ editing: true }) }} className="float-right" />
                <Delete onClick={() => { deleteTopic(topic.id) }} className="float-right" />
            </div>
        }
        {state.editing &&
            <div className="nav-link">
                <input
                    ref={node => input = node}
                    style={{ 'border': 'none' }}
                    defaultValue={topic.title}
                    onChange={(e) => updateState({ 'topicTitle': e.target.value })}
                    className="form-control-sm" />
                <Check onClick={() => { updateState({ editing: false }); updateTopic(topic.id, topic) }} className="float-right" />
            </div>
        }
    </li>

export default TopicPillItemComponent;