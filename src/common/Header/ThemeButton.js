import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import IconButton from '@material-ui/core/IconButton';

import { setTheme } from '../../redux/actions/cofigurationActions';


const ThemeButton = () => {
	const dispatch = useDispatch();
	const darkState = useSelector((state) => state.configuration.isDarkTheme);

	return (
		<IconButton onClick={() => dispatch(setTheme(!darkState))}>
			{darkState && <Brightness5OutlinedIcon style={{ color: 'white' }} />}
			{!darkState && <Brightness4OutlinedIcon style={{ color: 'white' }} />}
		</IconButton >
	);
};

export default ThemeButton;