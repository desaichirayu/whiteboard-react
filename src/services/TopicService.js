import *  as constants from '../constants'
let serverURL = constants.SERVER_URL;

export default class TopicService {

    static myInstance = null;

    static getInstance() {
        if (TopicService.myInstance == null) {
            TopicService.myInstance =
                new TopicService();
        }
        return this.myInstance;
    }

    createTopic = (lessonId, topic) => fetch(serverURL + "/api/lessons/"+ parseInt(lessonId) +"/topics",{
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    // findAllTopics = () =>
    //     topics

    findAllTopicsForLessonById = lessonId => fetch(serverURL + "/api/lessons/"+ parseInt(lessonId) +"/topics").then(response => response.json());

    updateTopic = (topicId, newTopic, callback) => fetch(serverURL + "/api/topics/" + parseInt(topicId), {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(callback);

    deleteTopic = (topicId, callback) => fetch(serverURL + "/api/topics/" + parseInt(topicId), {
        method: "DELETE"
    }).then(callback);
}
