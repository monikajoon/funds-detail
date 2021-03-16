import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';

import { routingData } from '../../routes/routingData';
import ThemeButton from './ThemeButton';


const getDrawerChoices = (classes) => {
	return routingData.map(({ label, href }) => {
		return (
			<div key={label}>
				<Link
					{...{
						component: RouterLink,
						to: href,
						color: 'inherit',
						style: { textDecoration: 'none' },
						key: label,
					}}
				>
					<MenuItem className={classes.drawerContainer}>{label}</MenuItem>
				</Link>
			</div>
		);
	});
};

const MobileHeader = (props) => {
	const { handleDrawerOpen, handleDrawerClose, drawerOpen, classes } = props;
	return (
		<Toolbar>
			<IconButton
				{...{
					edge: 'start',
					color: 'inherit',
					'aria-label': 'menu',
					'aria-haspopup': 'true',
					onClick: handleDrawerOpen,
				}}
			>
				<MenuIcon />
			</IconButton>
			<Typography variant="h6" className={classes.title}>
				React Boilerplate
			</Typography>
			<Drawer
				{...{
					anchor: 'left',
					open: drawerOpen,
					onClose: handleDrawerClose,
				}}
			>
				{getDrawerChoices(classes)}
			</Drawer>
			<ThemeButton />
		</Toolbar>
	);
};

MobileHeader.propTypes = {
	handleDrawerClose: PropTypes.func.isRequired,
	handleDrawerOpen: PropTypes.func.isRequired,
	drawerOpen: PropTypes.bool.isRequired,
	classes: PropTypes.any.isRequired,
};

export default MobileHeader;