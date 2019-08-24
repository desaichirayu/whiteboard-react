import React from 'react'

const ImageWidget = ({ widget, preview, imageSrcChange, widgetNameChange }) => {
    let textInput;
    let nameInput;
    return (
        <div>
            {
                preview &&
                <div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="itx" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2">Image URL:</span>
                            </label>
                            <input type="text" className="form-control" id="itx" placeholder="Image URL"
                                aria-label="h-text" aria-describedby="basic-addon2" value={widget.src}
                                onChange={() => imageSrcChange(widget.id, textInput.value)} ref={node => textInput = node} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="wniw" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon4">Widget Name:</span>
                            </label>
                            <input type="text" className="form-control" placeholder="Widget name"
                                id="wniw" aria-label="w-name" aria-describedby="basic-addon2" value={widget.name}
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
                <img
                    src={widget.src}
                    alt="Picsum" style={{ width: "200px", height: "300px" }} />
            </div>
        </div>
    )
};

export default ImageWidget