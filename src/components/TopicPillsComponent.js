import React from 'react'
import { Add } from '@material-ui/icons'
import TopicPillItemContainer from "../containers/TopicPillItemContainer";
const TopicPillsComponent = ({ course, topics, deleteTopic, createTopic, titleChanged, updateTopic, clearInput, params }) =>
    <div className="border border-light rounded row mt-1">
        <ul className="nav nav-pills col-12">
            {
                topics.map(topic =>
                    <TopicPillItemContainer
                        key={topic.id}
                        topic={topic}
                        params={params}
                        deleteTopic={deleteTopic}
                        updateTopic={updateTopic} />
                )
            }
            <li className="nav-item float-right">
                <span className="form-control">
                    <input onChange={titleChanged} placeholder="New Topic" />
                    <Add onClick={() => { createTopic() }} />
                </span>
            </li>
        </ul>
    </div>

export default TopicPillsComponent