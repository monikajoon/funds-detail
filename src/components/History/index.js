import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';



import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Chart from 'react-apexcharts';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { getHistory } from '../../redux/actions/historyActions';

import { useDispatch } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(() => ({
	paper: {
		height: 360,
	},
}));

export default function History() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const fundsData = useSelector((state) => state.history);
	const createData = (date, entryPrice, exitPrice) => {
		return { date, entryPrice, exitPrice };
	};
	let rows = [];
	let verticalData = [];
	let horizontalData = [];
	if (!fundsData.loading && fundsData.history && fundsData.history.data) {
		fundsData.history.data.map((dataObj) => {
			dataObj.funds.map((fund) => {
				rows.push(createData(fund.date, fund.entryPrice, fund.exitPrice));
				verticalData.push(fund.entryPrice);
				horizontalData.push(fund.date);
			});
		});
	}

	const getFundHistory = () => {
		dispatch(getHistory());
	};
	useEffect(() => {
		getFundHistory();
	}, []);
	const dataChart = {
		options: {
			chart: {
				id: 'apexchart-example'
			},
			xaxis: {
				categories: horizontalData.reverse()
			}
		},
		series: [{
			name: 'series-1',
			data: verticalData.reverse()
		}]
	};
	const renderHistory = () => {
		return (
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Paper >
						<h2>Mystery ki History</h2>
						<br />
						<TableContainer component={Paper}>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell align="right">Entry&nbsp;Price</TableCell>
										<TableCell align="right">Exit&nbsp;Price</TableCell>

									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.id} >
											<TableCell component="th" scope="row">
												{row.date}
											</TableCell>
											<TableCell align="right">{row.entryPrice}</TableCell>
											<TableCell align="right">{row.exitPrice}</TableCell>

										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.paper}>
						<Chart options={dataChart.options} series={dataChart.series} type="line" width={500} height={320} />
					</Paper>
				</Grid>
			</Grid>


		);
	};

	return (
		<Container >
			<Box component="span" m={1}>
				<div className={classes.root}>
					<Paper>
						<Typography variant="h6" className={classes.title}>
							Suncorp Fund Test
						</Typography>
						<Link href="/suncorp-wealthsmart/" >Back to home Page</Link>
						{fundsData.loading && (
							<div >
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((key) => {
									return <Skeleton key={key} animation="wave" />;
								})}
							</div>
						)}
						{!fundsData.loading && renderHistory()}
					</Paper>
				</div>
			</Box>
		</Container>
	);
}
