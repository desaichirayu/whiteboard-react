import WidgetService from '../services/WidgetService'
import '../utils/WidgetUtils'
import * as constants from '../constants'
let widgetServiceInstance = WidgetService.getInstance();
// reducer => state => store => provider => container => map to props => components

const widgetReducer = (state, action) => {
    if (action.type === constants.DELETE_WIDGET) {
        return {
            widget: state.widget,
            widgets: action.widgets,
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.CREATE_WIDGET) {
        return {
            widget: state.widget,
            widgets: action.widgets,
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.UPDATE_WIDGET) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => widget.id == action.widget.id ? action.widget : widget),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.PREVIEW) {
        return {
            widget: state.widget,
            widgets: state.widgets,
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: !state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.FIND_ALL_WIDGETS_FOR_TOPIC) {
        return {
            widget: state.widget,
            widgets: action.widgets,
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.FIND_WIDGET) {
        return {
            widget: widgetServiceInstance.findWidget(state.topicId, state.widgetId),
            widgets: state.widgets,
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.MOVE_UP) {
        let index = state.widgets.indexOf(action.widget);
        state.widgets.move(index, index - 1);
        return {
            widget: state.widget,
            widgets: state.widgets.splice(0),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.MOVE_DOWN) {
        let index = state.widgets.indexOf(action.widget);
        state.widgets.move(index, index + 1);
        return {
            widget: state.widget,
            widgets: state.widgets.splice(0),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.HEADING_SIZE_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.size = action.size;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.WIDGET_TEXT_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.text = action.text;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.PARA_TEXT_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.paraText = action.paraText;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.LINK_TEXT_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.linkText = action.linkText;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.WIDGET_NAME_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.name = action.name;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.LIST_TYPE_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.listType = action.listType;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.LIST_ITEM_TEXT_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.items = action.items.split('\n').join(',');
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.IMAGE_SRC_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.src = action.src;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.LINK_CHANGE) {
        return {
            widget: state.widget,
            widgets: state.widgets.map(widget => {
                if (widget.id == action.id) {
                    widget.href = action.href;
                }
                return Object.assign({}, widget);
            }),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.FIND_ALL_WIDGETS) {
        return {
            widget: state.widget,
            widgets: widgetServiceInstance.findWidgets(),
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    } else if (action.type === constants.SAVE) {
        return {
            widget: state.widget,
            widgets: action.widgets,
            widgetTemplate: state.widgetTemplate,
            widgetId: state.widgetId,
            preview: state.preview,
            topicId: state.topicId
        }
    }

    return state;
};

export default widgetReducer