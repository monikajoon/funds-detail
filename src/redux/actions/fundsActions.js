import axios from 'axios';

import { REQ_FUNDS, RES_FUNDS, ERROR } from '../../constants/reduxConstants';

const BASE_URL = '/data/';

export const getFunds = () => {
	return (dispatch) => {
		const url = `${BASE_URL}funds_home.json`;

		dispatch({ type: REQ_FUNDS });
		axios.get(url).then(
			(res) => {
				dispatch({ type: RES_FUNDS, data: res.data });
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
