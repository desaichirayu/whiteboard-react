import React from 'react'
import ModuleListItemComponent from '../components/ModuleListItemComponent'

export default class ModuleListItemContainer
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: props.module,
            editing: false
        }
    }

    updateState = newState => {
        if (newState.moduleTitle) {
            newState['module'] = this.state.module;
            newState.module.title = newState.moduleTitle;
        }
        this.setState(newState)
    }
    render() {
        return (
            <ModuleListItemComponent
                state={this.state}
                deleteModule={this.props.deleteModule}
                updateModule={this.props.updateModule}
                updateState={this.updateState}
                module={this.state.module}
                editing={this.state.editing}
                params={this.props.params} />
        )
    }
}