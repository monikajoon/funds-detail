import axios from 'axios';

import { RES_HISTORY, REQ_HISTORY, ERROR } from '../../constants/reduxConstants';

const BASE_URL = '/data/';

export const getHistory = () => {
	return (dispatch) => {
		const url = `${BASE_URL}fund_history.json`;

		dispatch({ type: REQ_HISTORY });
		axios.get(url).then(
			(res) => {
				dispatch({ type: RES_HISTORY, data: res.data });
			},
			(error) => {
				dispatch({
					type: ERROR,
					data: [],
					error,
				});
			}
		);
	};
};
