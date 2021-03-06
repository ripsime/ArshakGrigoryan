import {
	GET_LAYOUT,
	SET_LAYOUT,
	ADD_ITEM,
} from '../components/dashboard/dashboardActions';

const initialState = {
	layout: [],
	loading: false,
};

function dashboard(state = initialState, action) {
	switch (action.type) {
		case GET_LAYOUT: {
			return {
				...state,
				loading: false,
				layout: action.payload.data,
			};
		}
		case ADD_ITEM: {
			return {
				...state,
				loading: true,
			};
		}
		case SET_LAYOUT: {
			return {
				...state,
				layout: action.payload.layout,
			};
		}
		default:
			return state;
	}
}

export default dashboard;
