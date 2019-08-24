import React from 'react'
import CourseTableContainer from "../containers/CourseTableContainer";
import CourseGridContainer from "../containers/CourseGridContainer";
import {AddCircle, SortByAlpha, ViewHeadline, ViewModule, ViewList, AddCircleOutlined} from "@material-ui/icons";

const CourseListComponent = ({courses, titleChanged, view, toggleView, createCourse, deleteCourse, updateCourse}) =>
        <div className="container-fluid">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                    <div className="col-2 float-left d-none d-sm-block">
                    <span className="navbar-brand">
                        <a className="navbar-brand m-2" href="#"> <ViewHeadline/> Course List </a>
                    </span>
                    </div>
                    <div className="col-10">
                    <span className="input-group m-2">
                        <a className="text-white d-block d-sm-none" href=""><ViewHeadline/></a>
                        <input className="form-control mr-sm-2" type="search" placeholder="New Course Title"
                               onChange={titleChanged}
                               aria-label="Search">
                        </input>
                        <span className="btn my-2 my-sm-0" style={{color: 'red', fontSize: 'xx-large'}}>
                            <AddCircle onClick={createCourse} style={{fontSize:"24px"}}/>
                        </span>
                    </span>

                    </div>
                </nav>
                <div className="list-group-item list-group-item-secondary">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    Title
                                </div>
                                <div className="col-2 d-none d-sm-block"><select>
                                    <option>Owned By</option>
                                </select></div>
                                <div className="col-2 d-none d-sm-block">Last Modified by me</div>
                                <div className="col-2 d-none d-sm-block">
                                    <ViewModule onClick={toggleView} className={`gridView ${view==='Grid'? "d-none":""}`} id="Grid" style={{ color: "inherit"}}/>
                                    <ViewList onClick={toggleView} className={`listView ${view==='List'? "d-none":""}`} id="List" style={{ color: "inherit"}}/>
                                    <SortByAlpha  href="#" style={{ color: "inherit"}}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {view === 'List' ? (
                        <CourseTableContainer courses={courses} deleteCourse={deleteCourse} updateCourse={updateCourse}/>
                    ) : view === 'Grid' ? (
                        <CourseGridContainer courses={courses} deleteCourse={deleteCourse} updateCourse={updateCourse}/>
                    ) : null}
                </div>
            </div>
            <div>
                <div>
                    <AddCircleOutlined onClick={createCourse} style={{fontSize: "48px", position: "fixed", bottom:"1%", right:"1%", color:"red"}}/>
                </div>
            </div>
        </div>

export default CourseListComponent