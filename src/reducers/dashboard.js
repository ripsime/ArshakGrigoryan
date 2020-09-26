import { 
    GET_LAYOUT, 
    SET_LAYOUT 
} from '../components/dashboard/dashboardActions';

const initialState = {
    layout: []
};

function dashboard(state = initialState, action) {
    switch (action.type) {
        case GET_LAYOUT: {
            return {
                ...state,
                layout: action.payload.data
            }
        }
        case SET_LAYOUT: {
            return state
        }
        default:
            return state
    }
}

export default dashboard