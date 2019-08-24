import React from 'react'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

const reducer = () => {
    return {message: "Hello World!"}
}

const store = createStore(reducer)

const HelloComponent = ({helloProperty}) =>
    <h1>{helloProperty}</h1>

const HelloContainer = connect(
    (state) => {
        return {helloProperty: state.message}
    }
)(HelloComponent)

const HelloExample = () =>
    <Provider store={store}>
        <HelloContainer/>
    </Provider>

export default HelloExample