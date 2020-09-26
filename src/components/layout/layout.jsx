import React, { PureComponent } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import './layout.less';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Layout extends PureComponent {
	static defaultProps = {
		className: "layout",
		cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
		rowHeight: 100,
	};

	state = {
		items: this.props.layout,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.items !== nextProps.layout) {
			return {
				items: nextProps.layout,
			};
		}

		return null;
	}

	onLayoutChange = (layout) => {
		// this.props.setLayout(layout);
		this.setState({ layout });
	};

	createElement = (el) => {
		const removeStyle = {
			position: "absolute",
			right: "2px",
			top: 0,
			cursor: "pointer",
		};

		return (
			<div key={el._id} className="layout-item">
				<span className="text">{el._id}</span>
				<span
					className="remove"
					style={removeStyle}
					onClick={this.onRemoveItem.bind(this, el._id)}
				>
					x
				</span>
			</div>
		);
	};

	onBreakpointChange = (breakpoint, cols) => {
		this.setState({
			breakpoint: breakpoint,
			cols: cols,
		});
	};

	onRemoveItem = (_id) => {
		console.log("removing", i);
		this.setState({ items: _.reject(this.state.items, { _id }) });
	};


	render() {
		return (
			<div>
				<button onClick={this.props.addItem}>Add Item</button>
				<ResponsiveGridLayout
					onLayoutChange={this.onLayoutChange}
					onBreakpointChange={this.onBreakpointChange}
					{...this.props}
				>
					{_.map(this.state.items, (el) => this.createElement(el))}
				</ResponsiveGridLayout>
			</div>
		);
	}
}

export default Layout;