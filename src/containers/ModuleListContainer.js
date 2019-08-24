import React from 'react'
import ModuleListComponent from '../components/ModuleListComponent'
import ModuleService from "../services/ModuleService";

export default class ModuleListContainer extends React.Component {

    render() {
        return (
            <ModuleListComponent
                params={this.props.params}
                course={this.props.course}
                modules={this.props.modules}
                deleteModule={this.props.deleteModule}
                createModule={this.props.createModule}
                titleChanged={this.props.moduleTitleChanged}
                updateModule={this.props.updateModule}
                clearInput={this.props.clearInput} />
        )
    }
}