import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import ScrollToTop from '../common/scrollTop';
import Header from '../common/Header';
import Home from '../components/Home';
import History from '../components/History';
//import NotFound from '../components/NotFound';
import MyPage from '../components/MyPage';
import Copyright from '../common/Copyright';

const useStyles = makeStyles(() => ({
	root: {},
}));

const Routes = () => {
	const classes = useStyles();

	return (
		<Router>
			<ScrollToTop>
				<Switch>
					<div className={classes.root}>
						<CssBaseline />
						<Header />
						<Route exact path= "/suncorp-wealthsmart" component={Home} />
						<Route exact path= "/" component={Home} />
						<Route exact path="/suncorp-page" component={MyPage} />
						<Route path="/suncorp-super-history" component={History} />
						<Copyright />
					</div>
				</Switch>
			</ScrollToTop>
		</Router>
	);
};

export default Routes;
