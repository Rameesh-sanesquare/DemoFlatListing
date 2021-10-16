import { GET_LABOUR_LIST, GET_LABOUR, SET_LOADER } from '../actions/type';
const initialState = {
    laborsList: [],
    laborDetails: {},
    isLoading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LABOUR_LIST:
            return { ...state, laborsList: action.payload };
        case GET_LABOUR:
            return { ...state, laborDetails: action.payload };
        case SET_LOADER:
            return { ...state, isLoading: action.payload };
        default:
            return state
    }
};
