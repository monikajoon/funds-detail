import { REQ_HISTORY, RES_HISTORY } from '../../constants/reduxConstants';

const initialState =  { loading: false, funds: [] };

export default function (state = initialState, action) {
	switch (action.type) {
	case RES_HISTORY:
		return {
			...state,
			loading: false,
			history: action.data,
		};
	case REQ_HISTORY:
		return {
			...state,
			loading: true,
			history: [],
		};
	default:
		return state;
	}
}
