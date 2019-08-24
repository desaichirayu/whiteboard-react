import *  as constants from '../constants'
let serverURL = constants.SERVER_URL;

export default class ModuleService {


    static myInstance = null;

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }

    createModuleForCourseId = (courseId, module) => fetch(serverURL + "/api/courses/"+ parseInt(courseId) +"/modules",{
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    // findAllModules = () =>
    //     modules

    findAllModuleForCourseById = (courseId) => fetch(serverURL + "/api/courses/"+ parseInt(courseId) +"/modules").then(response => response.json());

    findModuleById = (moduleId) => fetch( serverURL + "/api/modules/" + parseInt(moduleId)).then(response => response.json());

    updateModule = (moduleId, newModule, callback) => fetch(serverURL + "/api/modules/" + parseInt(moduleId), {
        method: "PUT",
        body: JSON.stringify(newModule),
        headers: {
            'content-type': 'application/json'
        }
    }).then(callback);

    deleteModule = (moduleId, callback) => fetch(serverURL + "/api/modules/" + parseInt(moduleId), {
        method: "DELETE"
    }).then(callback);
}
