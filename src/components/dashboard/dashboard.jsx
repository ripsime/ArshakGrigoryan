import React, { Fragment, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Layout from '../layout/layout';
import './dashboard.less';
import * as dashboardActions from './dashboardActions.js';

class Dashboard extends Component {
	componentDidMount() {
        axios
        .get("http://localhost:3000/layout")
			.then(
				(result) => {
                    this.props.get_layout(result)
                    console.log(result)
				},
				(error) => {
                    console.log(`get Error - ${error}`)
				}
			);
	}

    setLayout = (layout) => {
        axios
        .post("http://localhost:3000/layout", {
            layout,
        })
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(`post Error - ${error}`)
            }
        );
    }
	render() {
		return (
			<Fragment>
				<div className='dashboard'>Dashboard</div>
				<Layout layout={this.props.layout} setLayout={this.setLayout}
				/>
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		layout: state.dashboard.layout,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(dashboardActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
