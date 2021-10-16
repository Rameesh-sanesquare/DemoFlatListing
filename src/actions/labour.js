import axios from 'axios';
import { GET_LABOUR_LIST, GET_LABOUR, SET_LOADER } from './type'
export const toggleLoader = (info) => (
    {
        type: SET_LOADER,
        payload: info
    }
)
export const getLabours = () => {
    return async function (dispatch) {
        try {
            dispatch(toggleLoader(true));
            var config = {
                method: 'get',
                url: `http://demo3365949.mockable.io/labours`,
                headers: {
                    'Accept': 'application/json',
                },
            };
            const response = await axios(config)
            dispatch(toggleLoader(false));
            dispatch({
                type: GET_LABOUR_LIST,
                payload: response.data.labours
            })
        } catch (e) {
            dispatch(toggleLoader(false));
        }
    }
}
export const getLabourDetails = () => {
    return async function (dispatch) {
        try {
            dispatch(toggleLoader(true));
            var config = {
                method: 'get',
                url: `http://demo3365949.mockable.io/labour`,
                headers: {
                    'Accept': 'application/json',
                },
            };
            const response = await axios(config)
            dispatch(toggleLoader(false));
            dispatch({
                type: GET_LABOUR,
                payload: response.data.labour
            })
        } catch (e) {
            dispatch(toggleLoader(false));
        }
    }
}