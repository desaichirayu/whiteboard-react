import React from 'react'
import LessonTabComponent from "../components/LessonTabComponent";

export default class LessonTabsContainer extends React.Component {
    render() {
        return (
            <LessonTabComponent
                params={this.props.params}
                module={this.props.module}
                lessons={this.props.lessons}
                deleteLesson={this.props.deleteLesson}
                createLesson={this.props.createLesson}
                titleChanged={this.props.lessonTitleChanged}
                updateLesson={this.props.updateLesson}
                clearInput={this.props.clearInput} />
        )
    }
}