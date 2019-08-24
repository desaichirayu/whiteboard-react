import React from 'react'

const ListWidget = ({ widget, preview, listTypeChange, listItemTextChange, widgetNameChange }) => {
    let textInputList;
    let selectListType;
    let nameInputLW;
    return (
        <div>
            {
                preview &&
                <div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="lst" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2">List Items:</span>
                            </label>
                            <textarea type="text" className="form-control" id="lst" placeholder="Enter one list item per line"
                                aria-label="h-text" aria-describedby="basic-addon2" value={widget.items.split(',').join('\n')}
                                onChange={() => listItemTextChange(widget.id, textInputList.value)} ref={node => textInputList = node} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="lty" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">List Type:</span>
                            </label>
                            <select id="lty" className="form-control" onChange={() => listTypeChange(widget.id, selectListType.value)}
                                value={widget.listType} ref={node => selectListType = node}>
                                <option value="0" selected="">Unordered List</option>
                                <option value="1">Ordered List</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group m-2">
                            <label for="wnls" className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon4">Widget Name:</span>
                            </label>
                            <input type="text" className="form-control" placeholder="Widget name"
                                id="wnls" aria-label="w-name" aria-describedby="basic-addon2" value={widget.name}
                                onChange={() => widgetNameChange(widget.id, nameInputLW.value)} ref={node => nameInputLW = node} />
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
                    widget.listType == 0 && <ul>
                        {widget.items.split(',').map(item => <li key={widget.items.split(',').indexOf(item)}>{item}</li>)}
                    </ul>
                }
                {
                    widget.listType == 1 && <ol>
                        {widget.items.split(',').map(item => <li key={widget.items.split(',').indexOf(item)}>{item}</li>)}
                    </ol>
                }
            </div>
        </div>
    )
};

export default ListWidget