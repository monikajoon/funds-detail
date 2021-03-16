import { SET_THEME } from '../../constants/reduxConstants';

export const setTheme = (isDarkTheme) => {
	return (dispatch) => {
		dispatch({ type: SET_THEME, payload: isDarkTheme });
	};
};
