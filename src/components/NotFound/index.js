import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(560),
			height: theme.spacing(60),
		},
	},
	title: {
		padding: '50px',
	},
}));

const NotFound = () => {
	const classes = useStyles();
	let location = useLocation();
	if (location.pathname == '/' || location.pathname === '/about' || location.pathname === '/news') 
		return <></>;

	return (
		<Container maxWidth="m">
			<Box component="span" m={1}>
				<div className={classes.root}>
					<Paper>
						<Typography variant="h2" className={classes.title}>
              404 Not Found
						</Typography>
					</Paper>
				</div>
			</Box>
		</Container>
	);
};

export default NotFound;
