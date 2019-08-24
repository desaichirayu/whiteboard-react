import WidgetListComponent from "../components/WidgetListComponent";
import { connect } from 'react-redux'
import * as actions from '../actions'

const stateToPropMapper = state => ({
    widgets: state.widgets,
    topicId: state.topicId,
    preview: state.preview,
    widgetTemplate: state.widgetTemplate
});

const propsToDispatcher = dispatch => ({
    updateWidget: (topicId, widget) => actions.updateWidget(dispatch, topicId, widget),
    deleteWidget: (tid, wid) => actions.deleteWidget(dispatch, tid, wid),
    createWidget: (tid, widget) => actions.createWidget(dispatch, tid, widget),
    previewToggle: () => actions.previewToggle(dispatch),
    moveUp: (widget) => actions.moveUp(dispatch, widget),
    moveDown: (widget) => actions.moveDown(dispatch, widget),
    headingSizeChange: (id, size) => actions.headingSizeChange(dispatch, id, size),
    widgetTextChange: (id, text) => actions.widgetTextChange(dispatch, id, text),
    widgetNameChange: (id, name) => actions.widgetNameChange(dispatch, id, name),
    listTypeChange: (id, listType) => actions.listTypeChange(dispatch, id, listType),
    listItemTextChange: (id, items) => actions.listItemTextChange(dispatch, id, items),
    imageSrcChange: (id, src) => actions.imageSrcChange(dispatch, id, src),
    linkChange: (id, href) => actions.linkChange(dispatch, id, href),
    paraTextChange: (id, paraText) => actions.paraTextChange(dispatch, id, paraText),
    linkTextChange: (id, linkText) => actions.linkTextChange(dispatch, id, linkText),
    save: (topicId, newWidgets) => actions.save(dispatch, topicId, newWidgets),
    loadWidgets: (topicId) => actions.loadWidgets(dispatch, topicId)
});

const WidgetListContainer = connect(
    stateToPropMapper, propsToDispatcher
)(WidgetListComponent);

export default WidgetListContainer