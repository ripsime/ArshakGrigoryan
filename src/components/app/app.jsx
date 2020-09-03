import React, { Component, Fragment } from 'react';

import Header from '../header';
import Body from '../body';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Body/>
            </Fragment>
        )
    }
}