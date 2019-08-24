import React from 'react'

const LinkWidget = ({ widget, preview, linkChange, linkTextChange, widgetNameChange }) => {
    let textInput;
    let linkTextInput;
    let nameInput;
    return (
        <div>
            {
                preview &&
                <div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="lt" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2">Link Text:</span>
                            </label>
                            <input type="text" className="form-control" id="lt" placeholder="Link text"
                                aria-label="h-text" aria-describedby="basic-addon2" value={widget.linkText}
                                onChange={() => linkTextChange(widget.id, linkTextInput.value)} ref={node => linkTextInput = node} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label htmlFor="ln" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2">Link:</span>
                            </label>
                            <input type="text" className="form-control" id="ln" placeholder="Link URL"
                                aria-label="h-text" aria-describedby="basic-addon2" value={widget.href}
                                onChange={() => linkChange(widget.id, textInput.value)}
                                ref={node => textInput = node} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="wnln" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon4">Widget Name:</span>
                            </label>
                            <input type="text" className="form-control" placeholder="Widget name"
                                id="wnln" aria-label="w-name" aria-describedby="basic-addon2" value={widget.name}
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
                <a href={widget.href}>{widget.linkText}</a>
            </div>
        </div>
    )
};

export default LinkWidget