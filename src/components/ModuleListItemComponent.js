import React from 'react'
import { Edit, Delete, Check } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const ModuleListItemComponent = ({ state, updateState, deleteModule, module, params, updateModule, input }) =>
    <li className={`list-group-item ${module.id == params.moduleId ? 'active' : ''}`}>
        {!state.editing &&
            <span>
                <a href={`/courses/${params.courseId}/modules/${module.id}/lessons/1/topics/1`}
                    style={{ "color": module.id == params.moduleId ? 'white' : 'black' }}>
                    {module.title}
                </a>
                <Edit onClick={() => { updateState({ editing: true }) }} className="float-right" />
                <Delete onClick={() => { deleteModule(module.id) }} className="float-right" />
            </span>
        }
        {state.editing &&
            <span>
                <input
                    ref={node => input = node}
                    style={{ 'border': 'none' }}
                    defaultValue={module.title}
                    onChange={(e) => updateState({ 'moduleTitle': e.target.value })}
                    className="form-control-sm" />
                <Check onClick={() => { updateState({ editing: false }); updateModule(module.id, module) }} className="float-right" />
            </span>
        }
    </li>

export default ModuleListItemComponent;