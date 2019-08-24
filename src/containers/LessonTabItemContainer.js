import React from 'react'
import LessonTabItemComponent from "../components/LessonTabItemComponent";

export default class LessonTabItemContainer
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lesson: props.lesson,
            editing: false
        }
    }

    updateState = newState => {
        if (newState.lessonTitle) {
            newState['lesson'] = this.state.lesson;
            newState.lesson.title = newState.lessonTitle;
        }
        this.setState(newState)
    }
    render() {
        return (
            <LessonTabItemComponent
                state={this.state}
                deleteLesson={this.props.deleteLesson}
                updateLesson={this.props.updateLesson}
                updateState={this.updateState}
                lesson={this.state.lesson}
                editing={this.state.editing}
                params={this.props.params} />
        )
    }
}