import React, { Fragment, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Layout from '../layout/layout';
import './dashboard.less';
import * as dashboardActions from './dashboardActions.js';


class Dashboard extends Component {
	componentDidMount() {
		axios.get("http://localhost:3000/layout").then(
			(result) => {
				this.props.get_layout(result);
				console.log(result);
			},
			(error) => {
				console.log(`Error - ${error}`);
			}
		);
	}

	addItem = () => {
		axios
			.post("http://localhost:3000/layout", {
				layout: {
					x: (this.props.layout.length * 2) % 12,
					y: 100000,
					w: 2,
					h: 2,
				},
			})
			.then(
				(result) => {
					console.log(result);
				},
				(error) => {
					console.log(`Error - ${error}`);
				}
			);
	};

	render() {
		return (
			<React.Fragment>
				<div>Dashboard</div>
				<Layout layout={this.props.layout} addItem={this.addItem} />
			</React.Fragment>
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
