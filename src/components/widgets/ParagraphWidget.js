import React from 'react'

const ParagraphWidget = ({ widget, preview, paraTextChange, widgetNameChange }) => {
    let textInput;
    let nameInput;
    return (
        <div>
            {
                preview &&
                <div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="pt" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2">Paragraph Text:</span>
                            </label>
                            <textarea type="text" className="form-control" id="pt" placeholder="Paragraph text"
                                aria-label="h-text" aria-describedby="basic-addon2" value={widget.paraText}
                                onChange={() => paraTextChange(widget.id, textInput.value)} ref={node => textInput = node} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="wnp" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon4">Widget Name:</span>
                            </label>
                            <input type="text" className="form-control" placeholder="Widget name"
                                id="wnp" aria-label="w-name" aria-describedby="basic-addon2" value={widget.name}
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
                <p>{widget.paraText}</p>
            </div>
        </div>
    )
};

export default ParagraphWidget