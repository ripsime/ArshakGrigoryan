import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Panel from '../panel/panel';
import Home from '../home/home';
import Dashboard from '../dashboard/dashboard';
import NotFoundPage from '../notFoundPage/notFoundPage';

import './app.less';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Router>
                    <div className="body">
                        <Panel/>
                        <div className="main">
                            <Switch>
                                <Route path='/' component={Home} exact/>
                                <Route path='/home' component={Home}/>
                                <Route path='/dashboard' component={Dashboard}/>
                                <Route component={NotFoundPage}/>                        
                            </Switch>
                        </div>
                    </div>            
                </Router>
            </Fragment>
        )
    }
}