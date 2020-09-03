import React, { Component } from 'react';

import './panel.css';

export default class Panel extends Component{
    
    render() {
        return (
            <div className="panel">
                <div className="burger">
                    <i className="fas fa-bars"></i>
                </div>
                <ul>
                    <li>
                        <i className="fas fa-home"></i>
                        <span>HOME</span>
                    </li>
                    <li>
                        <i className="fas fa-tachometer-alt"></i>
                        <span>DASHBOARD</span>
                    </li>
                </ul>
            </div>
        )
    }
}