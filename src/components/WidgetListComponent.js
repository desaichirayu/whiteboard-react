import React from 'react'
import { ToggleOff, ToggleOn, ArrowUpward, ArrowDownward, Delete, AddBox } from '@material-ui/icons'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

class WidgetListComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

    }

    componentDidMount() {
        this.props.loadWidgets(this.props.topicId);
    }

    render() {
        return (
            <div className="container-fluid">

                <ul className="list-group">
                    <div className="card m-2">
                        <div className="card-body">
                            <li key={(new Date().getTime())} className="list-group-item">
                                <div className="row">
                                    <div className="col-4">
                                    </div>
                                    <div className="col-8">

                                <span className="float-right">
                                    <button className="btn-success m-1 p-1" onClick={() => this.props.save(this.props.topicId, this.props.widgets)}> Save </button>

                                    {
                                        this.props.preview && <a>  | Preview: <ToggleOff id="toff" className="m-1 p-1" onClick={this.props.previewToggle} style={{ fontSize: "51px" }} /> </a>
                                    }
                                    {
                                        !this.props.preview && <a>  | Preview: <ToggleOn id="ton" className="m-1 p-1" onClick={this.props.previewToggle} style={{ fontSize: "51px" }} /> </a>
                                    }
                                </span>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                    {
                        this.props.widgets.map(widget =>
                            <div className="card m-2" key={widget.id}>
                                <div className="card-body">
                                    <li key={widget.id} className="list-group-item">
                                        {
                                            this.props.preview && <div className="row">
                                                <div className="col-4">
                                                    {
                                                        widget.type === 'HEADING' && <h4>Heading Widget</h4>
                                                    }
                                                    {
                                                        widget.type === 'PARAGRAPH' && <h4>Paragraph Widget</h4>
                                                    }
                                                    {
                                                        widget.type === 'LINK' && <h4>Link Widget</h4>
                                                    }
                                                    {
                                                        widget.type === 'LIST' && <h4>List Widget</h4>
                                                    }
                                                    {
                                                        widget.type === 'IMAGE' && <h4>Image Widget</h4>
                                                    }
                                                </div>
                                                <div className="col-8">
                                            <span className="float-right">
                                                {
                                                    this.props.widgets.indexOf(widget) !== 0 &&
                                                    <ArrowUpward onClick={() => this.props.moveUp(widget)} style={{ fontSize: "36px", color: "#fcd31e" }} />
                                                }
                                                {
                                                    this.props.widgets.indexOf(widget) !== (this.props.widgets.length - 1) &&
                                                    <ArrowDownward onClick={() => this.props.moveDown(widget)} style={{ fontSize: "36px", color: "#fcd31e" }} />
                                                }
                                                <select
                                                    onChange={(event) => this.props.updateWidget(this.props.topicId, { ...widget, type: event.target.value })}
                                                    value={widget.type}>
                                                    <option value="HEADING">Heading</option>
                                                    <option value="PARAGRAPH">Paragraph</option>
                                                    <option value="IMAGE">Image</option>
                                                    <option value="LIST">List</option>
                                                    <option value="LINK">Link</option>
                                                </select>
                                                <Delete
                                                    onClick={() => this.props.deleteWidget(widget.topicId, widget.id)} style={{ fontSize: "36px", color: "#b22208" }} />
                                            </span>
                                                </div>

                                            </div>
                                        }
                                        {
                                            widget.type === 'HEADING' &&
                                            <HeadingWidget widget={widget} preview={this.props.preview} headingSizeChange={this.props.headingSizeChange} widgetTextChange={this.props.widgetTextChange} widgetNameChange={this.props.widgetNameChange} />
                                        }
                                        {
                                            widget.type === 'PARAGRAPH' &&
                                            <ParagraphWidget widget={widget} preview={this.props.preview} paraTextChange={this.props.paraTextChange} widgetNameChange={this.props.widgetNameChange} />
                                        }
                                        {
                                            widget.type === 'LINK' &&
                                            <LinkWidget widget={widget} preview={this.props.preview} linkChange={this.props.linkChange} linkTextChange={this.props.linkTextChange} widgetNameChange={this.props.widgetNameChange} />
                                        }
                                        {
                                            widget.type === 'LIST' &&
                                            <ListWidget widget={widget} preview={this.props.preview} listTypeChange={this.props.listTypeChange} listItemTextChange={this.props.listItemTextChange} widgetNameChange={this.props.widgetNameChange} />
                                        }
                                        {
                                            widget.type === 'IMAGE' &&
                                            <ImageWidget widget={widget} preview={this.props.preview} imageSrcChange={this.props.imageSrcChange} widgetNameChange={this.props.widgetNameChange} />
                                        }
                                    </li>
                                </div>

                            </div>
                        )
                    }
                </ul>
                <div>
                    <AddBox onClick={() => this.props.createWidget(this.props.topicId, this.props.widgetTemplate)} style={{ fontSize: "60px", position: "fixed", bottom: "1%", right: "1%", color: "red" }} />
                </div>
            </div>
        );
    }
}

export default WidgetListComponent