import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	header: {
		backgroundColor: '#400CCC',
		paddingRight: '79px',
		paddingLeft: '118px',
		'@media (max-width: 900px)': {
			paddingLeft: 0,
		},
	},
	drawerContainer: {
		padding: '10px 50px',
	},
	navButton: {
		fontFamily: 'Open Sans, sans-serif',
		fontWeight: 500,
		marginLeft: '10px',
	},
}));

const Header = () => {
	const classes = useStyles();
	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});
	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};
		setResponsiveness();
		window.addEventListener('resize', () => setResponsiveness());
	}, []);

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<MobileHeader
				handleDrawerClose={handleDrawerClose}
				handleDrawerOpen={handleDrawerOpen}
				drawerOpen={drawerOpen}
				classes={classes} />
		);
	};

	const displayDesktop = () => {
		return (
			<DesktopHeader classes={classes} />
		);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</div>
	);
};

export default Header;
