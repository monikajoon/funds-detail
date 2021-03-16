import { RES_FUNDS, REQ_FUNDS } from '../../constants/reduxConstants';

const initialState =  { loading: false, funds: [] };

export default function (state = initialState, action) {
	switch (action.type) {
	case RES_FUNDS:
		return {
			...state,
			loading: false,
			funds: action.data,
		};
	case REQ_FUNDS:
		return {
			...state,
			loading: true,
			funds: [],
		};
	default:
		return state;
	}
}
