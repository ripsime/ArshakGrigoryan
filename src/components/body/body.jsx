import React, { Fragment } from 'react';

import Panel from '../panel';

import './body.css';

const Body = () => {
    return (
        <Fragment>
            <div className="body">
                <Panel/>
                <div className="main"></div>
            </div>
        </Fragment>
    )
}

export default Body