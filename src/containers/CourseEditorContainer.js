import React from 'react'
import CourseEditorComponent from '../components/CourseEditorComponent'
import CourseService from '../services/CourseService'
import ModuleService from '../services/ModuleService'
import LessonService from '../services/LessonService'
import TopicService from "../services/TopicService";

export default class CourseEditorContainer
    extends React.Component {
    constructor(props) {
        super(props);
        this.courseId = props.match.params.courseId;
        this.moduleId = props.match.params.moduleId;
        this.lessonId = props.match.params.lessonId;
        this.topicId = props.match.params.topicId;
        this.courseService = CourseService.getInstance();
        this.moduleService = ModuleService.getInstance();
        this.lessonService = LessonService.getInstance();
        this.topicService = TopicService.getInstance();

        this.state = {
            course: {},
            module: {},
            lesson: {},
            modules: [],
            lessons: [],
            topics: [],
            widgetsContainer: {},
            moduleTemplate: {
                "courseId": this.courseId,
                "title": "New Module"
            },
            lessonTemplate: {
                "moduleId": this.moduleId,
                "title": "New Lesson"
            },
            topicTemplate: {
                "lessonId": this.lessonId,
                "title": "New Topic"
            }
        };

    }

    componentDidMount() {
        this.courseService.findCourseById(parseInt(this.courseId)).then(cse => this.setState({course: cse}));
        this.moduleService.findModuleById(parseInt(this.moduleId)).then(module => this.setState({module: module}));
        this.lessonService.findLessonById(parseInt(this.lessonId)).then(lesson => this.setState({lesson: lesson}));
        this.moduleService.findAllModuleForCourseById(this.courseId).then(modules => this.setState({modules: modules}));
        this.lessonService.findAllLessonForModuleById(this.moduleId).then(lessons => this.setState({lessons: lessons}));
        this.topicService.findAllTopicsForLessonById(this.lessonId).then(topics => this.setState({topics: topics}));
    }

    deleteModule = (id) => {
        this.moduleService.deleteModule(id, () => this.moduleService.findAllModuleForCourseById(this.state.course.id)).then(modules => this.setState({modules: modules}));
    };

    moduleTitleChanged = (event) => {
        this.setState({
            moduleTemplate: {
                "courseId": this.state.course.id,
                "title": event.target.value
            }
        })
    };

    createModule = () => {
        this.moduleService.createModuleForCourseId(this.state.course.id, this.state.moduleTemplate).then(modules => this.setState({modules: modules}));
    };

    updateModule = (moduleId, module) => {
        this.moduleService.updateModule(moduleId, module, () => this.moduleService.findAllModuleForCourseById(this.state.course.id)).then(modules => this.setState({modules: modules}));

    };

    clearInput = (selector) => {
        document.getElementById(selector).innerHTML = "";
    };

    deleteLesson = (id) => {
        this.lessonService.deleteLesson(id, () => this.lessonService.findAllLessonForModuleById(this.state.module.id)).then(lessons => this.setState({lessons: lessons}));
    };

    lessonTitleChanged = (event) => {
        this.setState({
            lessonTemplate: {
                "moduleId": this.state.module.id,
                "title": event.target.value
            }
        })
    };

    createLesson = () => {
        this.lessonService.createLesson(this.state.module.id, this.state.lessonTemplate).then(lessons => this.setState({lessons: lessons}));
    };

    updateLesson = (lessonId, lesson) => {
        this.lessonService.updateLesson(lessonId,lesson, () => this.lessonService.findAllLessonForModuleById(this.state.module.id)).then(lessons => this.setState({lessons: lessons}));
    };

    deleteTopic = (id) => {
        this.topicService.deleteTopic(id, () => this.topicService.findAllTopicsForLessonById(this.state.lesson.id)).then( topics => this.setState({topics: topics}));
    };

    topicTitleChanged = (event) => {
        this.setState({
            topicTemplate: {
                "lessonId": this.state.lesson.id,
                "title": event.target.value
            }
        })
    };

    createTopic = () => {
        this.topicService.createTopic(this.state.lesson.id, this.state.topicTemplate).then( topics => this.setState({topics: topics}));
    };

    updateTopic = (topicId, topic) => {
        this.topicService.updateTopic(topicId, topic, () => this.topicService.findAllTopicsForLessonById(this.state.lesson.id)).then( topics => this.setState({topics: topics}));
    };

    render() {
        return (
            <div>
                <CourseEditorComponent
                   course={this.state.course}
                    module={this.state.module}
                    lesson={this.state.lesson}

                    modules={this.state.modules}
                    lessons={this.state.lessons}
                    topics={this.state.topics}

                    moduleTemplate={this.state.moduleTemplate}
                    deleteModule={this.deleteModule}
                    createModule={this.createModule}
                    moduleTitleChanged={this.moduleTitleChanged}
                    updateModule={this.updateModule}


                    lessonTemplate={this.state.lessonTemplate}
                    deleteLesson={this.deleteLesson}
                    createLesson={this.createLesson}
                    updateLesson={this.updateLesson}
                    lessonTitleChanged={this.lessonTitleChanged}

                    topicTemplate={this.state.topicTemplate}
                    deleteTopic={this.deleteTopic}
                    createTopic={this.createTopic}
                    updateTopic={this.updateTopic}
                    topicTitleChanged={this.topicTitleChanged}

                    clearInput={this.clearInput}
                    params={this.props.match.params}/>
            </div>
        )
    }
}