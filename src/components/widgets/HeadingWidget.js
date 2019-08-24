import React from 'react'

const HeadingWidget = ({ widget, preview, headingSizeChange, widgetTextChange, widgetNameChange }) => {
    let textInput;
    let selectElement;
    let nameInput;
    return (
        <div>
            {
                preview &&
                <div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="ht" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2">Heading Text:</span>
                            </label>
                            <input type="text" className="form-control" id="ht" placeholder="Heading text"
                                aria-label="h-text" aria-describedby="basic-addon2" value={widget.text}
                                onChange={() => widgetTextChange(widget.id, textInput.value)} ref={node => textInput = node} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="hty" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Heading Type:</span>
                            </label>
                            <select id="hty" className="form-control" onChange={() => headingSizeChange(widget.id, selectElement.value)}
                                value={widget.size} ref={node => selectElement = node}>
                                <option value="1" selected="">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                                <option value="4">Heading 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="wnh" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon4">Widget Name:</span>
                            </label>
                            <input type="text" className="form-control" placeholder="Widget name"
                                id="wnh" aria-label="w-name" aria-describedby="basic-addon2" value={widget.name}
                                onChange={() => widgetNameChange(widget.id, nameInput.value)} ref={node => nameInput = node} />
                        </div>
                    </div>
                </div>
            }
            {
                preview && <div className="row m-1">
                    <h3>Preview:</h3>
                </div>
            }
            <div className="row m-1">
                {
                    widget.size == 1 && <h1>{widget.text}</h1>
                }
                {
                    widget.size == 2 && <h2>{widget.text}</h2>
                }
                {
                    widget.size == 3 && <h3>{widget.text}</h3>
                }
                {
                    widget.size == 4 && <h4>{widget.text}</h4>
                }
            </div>
        </div>
    )
};

export default HeadingWidget