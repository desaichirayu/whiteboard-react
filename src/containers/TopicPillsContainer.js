import React from 'react'
import TopicPillsComponent from "../components/TopicPillsComponent";

export default class TopicPillsContainer
    extends React.Component {
    render() {
        return (
            <TopicPillsComponent
                params={this.props.params}
                lesson={this.props.lesson}
                topics={this.props.topics}
                deleteTopic={this.props.deleteTopic}
                createTopic={this.props.createTopic}
                titleChanged={this.props.topicTitleChanged}
                updateTopic={this.props.updateTopic}
                clearInput={this.props.clearInput} />
        )
    }
}