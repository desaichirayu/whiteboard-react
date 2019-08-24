import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import LessonTabsContainer from '../containers/LessonTabsContainer'
import TopicPillsContainer from "../containers/TopicPillsContainer";
import WidgetListMasterContainer from "../containers/WidgetListMasterContainer";

const   CourseEditorComponent = ({course, module, lesson, modules, lessons, topics,
                                   moduleTemplate, deleteModule, createModule, moduleTitleChanged, updateModule,
                                   lessonTemplate, deleteLesson, createLesson, updateLesson, lessonTitleChanged,
                                   topicTemplate, deleteTopic, createTopic, updateTopic, topicTitleChanged,
                                   clearInput, params}) =>
<div className="container-fluid mt-1">
    <header>
        <nav className="navbar navbar-expand-lg">
                <span className="navbar-brand h3 float-right" > {course.title} </span>
        </nav>
    </header>
    <div className="row">
        <div className="col-3">
            <ModuleListContainer
                params={params}
                course={course}
                modules={modules}
                moduleTemplate={moduleTemplate}
                deleteModule={deleteModule}
                createModule={createModule}
                moduleTitleChanged={moduleTitleChanged}
                updateModule={updateModule}
                clearInput={clearInput}/>
        </div>
        <div className="col-9">
                <LessonTabsContainer
                params={params}
                module={module}
                lessons={lessons}
                lessonTemplate={lessonTemplate}
                deleteLesson={deleteLesson}
                createLesson={createLesson}
                updateLesson={updateLesson}
                lessonTitleChanged={lessonTitleChanged}
                clearInput={clearInput}/>

                <TopicPillsContainer
                params={params}
                lesson={lesson}
                topics={topics}
                topicTemplate={topicTemplate}
                deleteTopic={deleteTopic}
                createTopic={createTopic}
                updateTopic={updateTopic}
                topicTitleChanged={topicTitleChanged}
                clearInput={clearInput}/>
            {
                // (!(Object.keys(course).length === 0 && course.constructor === Object))
                // && (!(Object.keys(module).length === 0 && module.constructor === Object))
                // && (!(Object.keys(lesson).length === 0 && lesson.constructor === Object))
                // && !(modules.length === 0)
                // && !(lessons.length === 0)
                // && !(topics.length === 0)
                // &&
                <WidgetListMasterContainer topicId={params.topicId}/>}
        </div>
    </div>
</div>

export default CourseEditorComponent;