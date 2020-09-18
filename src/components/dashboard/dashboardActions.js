export const GET_LAYOUT = 'GET_LAYOUT';
export const SET_LAYOUT = 'SET_LAYOUT';

export function get_layout(payload) {
    return {
        type: GET_LAYOUT,
        payload,
    }
}

export function set_layout(payload) {
    return {
        type: SET_LAYOUT,
        payload,
    }
}