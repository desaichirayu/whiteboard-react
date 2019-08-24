import React from 'react'
import TopicPillItemComponent from "../components/TopicPillItemComponent";

export default class TopicPillItemContainer
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: props.topic,
            editing: false
        }
    }

    updateState = newState => {
        if (newState.topicTitle) {
            newState['topic'] = this.state.topic;
            newState.topic.title = newState.topicTitle;
        }
        this.setState(newState)
    }
    render() {
        return (
            <TopicPillItemComponent
                state={this.state}
                deleteTopic={this.props.deleteTopic}
                updateTopic={this.props.updateTopic}
                updateState={this.updateState}
                topic={this.state.topic}
                editing={this.state.editing}
                params={this.props.params} />
        )
    }
}