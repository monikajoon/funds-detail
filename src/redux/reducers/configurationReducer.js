import { SET_THEME } from '../../constants/reduxConstants';

const initialState = {
	isDarkTheme: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
	case SET_THEME: {
		return {
			...state,
			isDarkTheme: action.payload,
		};
	}
	default:
		return state;
	}
}
