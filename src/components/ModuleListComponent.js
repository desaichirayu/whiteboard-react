import React from 'react'
import { Edit, Close, Add, Check } from '@material-ui/icons'
import ModuleListItemContainer from "../containers/ModuleListItemContainer";
const ModuleListComponent = ({ course, modules, deleteModule, createModule, titleChanged, updateModule, clearInput, params }) =>
    <div>
        <div>
            <ul className="list-group flex-column">
                <span className="input-group m-2">
                    <input className="form-control mr-sm-2" id="am" type="search" placeholder="New Module"
                        onChange={titleChanged}>
                    </input>
                    <span className="btn my-2 my-sm-0">
                        <Add onClick={() => { createModule() }} />
                    </span>
                </span>
                {
                    modules.map(module =>
                        <ModuleListItemContainer
                            key={module.id}
                            module={module}
                            params={params}
                            deleteModule={deleteModule}
                            updateModule={updateModule} />
                    )
                }
            </ul>
        </div>
    </div>

export default ModuleListComponent