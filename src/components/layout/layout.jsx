import React, { PureComponent } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import './layout.less';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Layout extends PureComponent {
	state = { layout: JSON.parse(JSON.stringify(this.props.layout)) };

	generateDOM = () => {
		return _.map(_.range(this.props.items), function (i) {
			return (
				<div className="layout-item" key={i}>
					<span>{i}</span>
				</div>
			);
		});
	};

	onLayoutChange = (layout) => {
		this.props.setLayout(layout);
		this.setState({ layout });
	};

	render() {
		return (
			<ResponsiveGridLayout
				layout={this.state.layout}
				onLayoutChange={this.onLayoutChange}
				{...this.props}
			>
				{this.generateDOM()}
			</ResponsiveGridLayout>
		);
	}
}

Layout.defaultProps = {
	className: "layout",
	items: 5,
	rowHeight: 30,
	cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
	breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
	isResizable: true,
};

export default Layout;