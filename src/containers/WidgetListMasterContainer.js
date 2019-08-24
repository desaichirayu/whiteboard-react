import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import widgetReducer from '../reducers/widgetReducer'
import WidgetListContainer from "../containers/WidgetListContainer";
import WidgetService from '../services/WidgetService'

// reducer => state => store => provider => container => map to props => components



export default class WidgetListMasterContainer extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            widget: {},
            widgets: [],
            widgetTemplate: {
                "topicId": 1,
                "type": "HEADING",
                "name": "New Widget",
                "text": "",
                "size": 1,
                "src": "",
                "href": "",
                "items": "",
                "listType": 0,
                "paraText": "",
                "linkText": "",
                "order": -1
            },
            widgetId: 123,
            preview: true,
            topicId: parseInt(this.props.topicId)
        };

    }

    componentDidMount() {
        WidgetService.getInstance().findAllWidgets(this.state.topicId).then(widgets => this.setState({widgets: widgets}));
    }

    componentWillReceiveProps(newProps) {
        this.setState({ ...this.state, topicId: newProps.topicId });
    }

    render() {
        const store = createStore(widgetReducer, this.state);
        return (
            <Provider store={store}>
                <WidgetListContainer />
            </Provider>
        )
    }
}