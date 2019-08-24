import *  as constants from '../constants'
let serverURL = constants.SERVER_URL;


export default class LessonService {

    static myInstance = null;

    static getInstance() {
        if (LessonService.myInstance == null) {
            LessonService.myInstance =
                new LessonService();
        }
        return this.myInstance;
    }

    createLesson = (moduleId, lesson) => fetch(serverURL + "/api/modules/"+ parseInt(moduleId) +"/lessons",{
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    // findAllLessons = () =>
    //     lessons

    findAllLessonForModuleById = moduleId => fetch(serverURL + "/api/modules/"+ parseInt(moduleId) +"/lessons").then(response => response.json());

    findLessonById = lessonId => fetch( serverURL + "/api/lessons/" + parseInt(lessonId)).then(response => response.json());

    updateLesson = (lessonId, newLesson, callback) => fetch(serverURL + "/api/lessons/" + parseInt(lessonId), {
        method: "PUT",
        body: JSON.stringify(newLesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(callback);

    deleteLesson = (lessonId, callback) => fetch(serverURL + "/api/lessons/" + parseInt(lessonId), {
        method: "DELETE"
    }).then(callback);
}
