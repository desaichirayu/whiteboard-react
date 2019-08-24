import *  as constants from '../constants'
let serverURL = constants.SERVER_URL;

export default class WidgetService {

    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = (topicId, widget) => fetch(serverURL + "/api/topics/"+ topicId +"/widgets", {
       method: "POST",
        body: JSON.stringify(widget),
        headers: {
           'content-type': 'application/json'
        }
    }).then(response => response.json());


    findAllWidgets = (topicId) => fetch(serverURL + "/api/topics/" + topicId +"/widgets")
            .then(response => response.json());


    findWidgets = () => fetch(serverURL + "/api/widgets")
        .then(response => response.json());

    findWidget = (topicId, widgetId) => fetch(serverURL + "/api/widgets/" + widgetId)
        .then(response => response.json());

    updateWidget = (topicId, widgetId, widget) =>
        fetch(serverURL + "/api/widgets/" + widgetId, {
          method:"PUT",
          body: JSON.stringify(widget) ,
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    deleteWidget = (topicId, widgetId, callback) => fetch(serverURL + "/api/widgets/" + widgetId,
        {
            method: "DELETE"
        }).then(callback);

    save = (topicId, newWidgets) => fetch(serverURL + "/api/topics/"+ topicId +"/widgets", {
            method: "PUT",
            body: JSON.stringify(newWidgets),
            headers: {
                'content-type': 'application/json'
            }
    }).then(response => response.json());

}