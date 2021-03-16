import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import App from './App';
import ThemeProviderHOC from './common/style/theme';
import store from './redux/store';

import Head from 'next/head';
import ReactSEO from 'react-seo';

import { getFunds } from './redux/actions/fundsActions';


/* eslint-disable */
ReactSEO.startMagic([{ url: '/suncorp-wealthsmart/', isFullMatch: false, ajaxFunction: getFunds, urlParams:[] }], renderDOM);
	// { url: '/suncorp-page/', isFullMatch: false, ajaxFunction: getFunds, urlParams:[/(.+\/suncorp-page\/|\/[^\/]+)/g] },
	// { url: '/suncorp-super-history/', isFullMatch: false, ajaxFunction: getFunds, urlParams:[/(.+\/suncorp-history\/|\/[^\/]+)/g] }]

	function renderDOM () {
		ReactDOM.render(
			<Provider store={store}>
				<ThemeProviderHOC>
					<Head>
						<title>Unit Price</title>
						<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
					</Head>
					<CssBaseline />
					<App />
				</ThemeProviderHOC>
			</Provider>,
	
			document.querySelector('#root')
		);
	
	}