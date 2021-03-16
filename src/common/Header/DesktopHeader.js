/* eslint-disable react/jsx-key */
import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { routingData } from '../../routes/routingData';
import ThemeButton from './ThemeButton';

const DesktopHeader = (props) => {
	const { classes } = props;

	return (
		<Toolbar>
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="menu"
			>
				<MenuIcon />
			</IconButton>
			<Typography variant="h6" className={classes.title}>
				{
					routingData.map(({ label, href }) => {
						return (
							<Button
								{...{
									key: label,
									color: 'inherit',
									to: href,
									component: RouterLink,
									className: classes.navButton,
								}}
							>
								{label}
							</Button>
						);
					})
				}
			</Typography>
			<ThemeButton />
			<Button color="inherit">Login</Button>
		</Toolbar>
	);
};

DesktopHeader.propTypes = {
	classes: PropTypes.any,
};

export default DesktopHeader;
