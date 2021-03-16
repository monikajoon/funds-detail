import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';


const ThemeProviderHOC = (props) => {
	const darkState = useSelector((state) => state.configuration.isDarkTheme);
	const palletType = darkState ? 'dark' : 'light';
	const mainPrimaryColor = darkState ? '#303030' : '#556cd6';
	const mainSecondaryColor = darkState ? 'rgba(0, 0, 0, 0.54)' : '#19857b';
	// A custom theme for this app
	const theme = createMuiTheme({
		palette: {
			type: palletType,
			primary: {
				main: mainPrimaryColor, // '#556cd6',
			},
			secondary: {
				main: mainSecondaryColor, // '#19857b',
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			{props.children}
		</ThemeProvider>
	);
};

ThemeProviderHOC.propTypes = {
	children: PropTypes.any,
};

export default ThemeProviderHOC;
