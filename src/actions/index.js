import * as constants from '../constants'
import WidgetService from '../services/WidgetService'
const widgetServiceInstance = WidgetService.getInstance();


export const loadWidgets = (dispatch, topicId) => {
    widgetServiceInstance.findAllWidgets(topicId).then(widgets => dispatch({ type: constants.FIND_ALL_WIDGETS_FOR_TOPIC, widgets: widgets}))
};

export const updateWidget = (dispatch, topicId, widget) => {
    widgetServiceInstance.updateWidget(topicId, widget.id, widget).then(
        widget =>     dispatch({ type: constants.UPDATE_WIDGET, widget: widget })
    )
};

export const deleteWidget = (dispatch, tid, wid) => {
    widgetServiceInstance.deleteWidget(tid, wid, () => widgetServiceInstance.findAllWidgets(tid)).then(widgets => dispatch({ type: constants.DELETE_WIDGET, widgets: widgets }))
};

export const createWidget = (dispatch, tid, widget) => {
    widgetServiceInstance.createWidget(tid, widget).then(widgets => dispatch({
        type: constants.CREATE_WIDGET,
        widgets: widgets
    }))
};

export const previewToggle = (dispatch) => {
    dispatch({
        type: constants.PREVIEW
    })
};

export const moveUp = (dispatch, widget) => {
    dispatch({
        type: constants.MOVE_UP, widget: widget
    })
};

export const moveDown = (dispatch, widget) => {
    dispatch({
        type: constants.MOVE_DOWN, widget: widget
    })
};

export const headingSizeChange = (dispatch, id, size) => {
    dispatch({
        type: constants.HEADING_SIZE_CHANGE, id: id, size: size
    })
};

export const widgetTextChange = (dispatch, id, text) => {
    dispatch({
        type: constants.WIDGET_TEXT_CHANGE, id: id, text: text
    })
};

export const widgetNameChange = (dispatch, id, name) => {
    dispatch({
        type: constants.WIDGET_NAME_CHANGE, id: id, name: name
    })
};

export const listTypeChange = (dispatch, id, listType) => {
    dispatch({
        type: constants.LIST_TYPE_CHANGE, id: id, listType: listType
    })
};

export const listItemTextChange = (dispatch, id, items) => {
    dispatch({
        type: constants.LIST_ITEM_TEXT_CHANGE, id: id, items: items
    })
};

export const imageSrcChange = (dispatch, id, src) => {
    dispatch({
        type: constants.IMAGE_SRC_CHANGE, id: id, src: src
    })
};

export const linkChange = (dispatch, id, href) => {
    dispatch({
        type: constants.LINK_CHANGE, id: id, href: href
    })
};

export const paraTextChange = (dispatch, id, paraText) => {
    dispatch({
        type: constants.PARA_TEXT_CHANGE, id: id, paraText: paraText
    })
};

export const linkTextChange = (dispatch, id, linkText) => {
    dispatch({
        type: constants.LINK_TEXT_CHANGE, id: id, linkText: linkText
    })
};

export const save = (dispatch, topicId, newWidgets) => {
    widgetServiceInstance.save(topicId, newWidgets).then(widgets => dispatch({
        type: constants.SAVE,
        widgets: widgets
    }))
};