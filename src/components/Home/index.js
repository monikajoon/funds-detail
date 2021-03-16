import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import { useForm, Controller } from 'react-hook-form';
// import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';


import { getFunds } from '../../redux/actions/fundsActions';

import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(560),
			height: theme.spacing(68),
		},
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	skeleton: {
		padding: theme.spacing(5),
		textAlign: 'center',
		width: '100%',
	},
	title: {
		padding: '20px',
		textAlign: 'center',
	},
	th: {
		color: 'red',
	},
	subheading: {
		background: 'blue',
	},
	selectedFund: {
		background: 'grey'
	},
	navButton: {
		background: 'pink',
	},
}));



export default function Home() {
	const dispatch = useDispatch();
	const fundsData = useSelector((state) => state.funds);
	const classes = useStyles();
	const [fundSelect, setFundSelect] = React.useState('');
	const createData = (name, date, entryPrice, exitPrice, id, subheading) => {
		return { name, date, entryPrice, exitPrice, id, subheading };
	};
	let rows = [];
	if (!fundsData.loading && fundsData.funds.data) {
		fundsData.funds.data.map((dataObj) => {
			rows.push(createData(dataObj.type, '', '', '', '', 'sub-heading'));
			dataObj.funds.map((fund) => {
				rows.push(createData(fund.name, fund.date, fund.entryPrice, fund.exitPrice, fund.id));
			});
		});
	}
	const getFundsData = () => {
		dispatch(getFunds());
	};
	const handleFundChange = (event) => {
		setFundSelect(event.target.value);
	};
	useEffect(() => {
		getFundsData();
	}, []);

	const renderFunds = () => {
		return (
			<div>
				<InputLabel id="demo-simple-select-label">Select fund</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value='Select the fund'
					onChange={handleFundChange}
				>
					<MenuItem value="">
						<em>Select fund</em>
					</MenuItem>
					{rows.map((row) => (
						row.subheading != 'sub-heading' && (
							<MenuItem value={row.id} key={row.id}>{row.name}</MenuItem>
						)
					))}
				</Select>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>FundName</TableCell>
								<TableCell align="right">Date</TableCell>
								<TableCell align="right">Entry&nbsp;Price</TableCell>
								<TableCell align="right">Exit&nbsp;Price</TableCell>
								<TableCell align="right">History&nbsp;</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.id} className={row.subheading == 'sub-heading' ? classes.subheading : '' + row.id == fundSelect ? classes.selectedFund : ''} >
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">{row.date}</TableCell>
									<TableCell align="right">{row.entryPrice}</TableCell>
									<TableCell align="right">{row.exitPrice}</TableCell>
									<TableCell align="right">
										{<Button
											{...{
												key: row.subheading == 'sub-heading' ? Math.random() : row.id,
												label: 'history',
												to: '/suncorp-super-history?fundId=' + row.id,
												component: RouterLink,
												className: classes.navButton,
											}}
										>
											{row.id}
										</Button>
										}
									</TableCell>

								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div >
		);
	};

	return (
		<Container >
			<Box component="span" m={1}>
				<div className={classes.root}>
					<Paper>
						<Typography variant="h6" className={classes.title}>
							Suncorp Funds
						</Typography>
						{fundsData.loading && (
							<div className={classes.skeleton}>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((key) => {
									return <Skeleton key={key} animation="wave" />;
								})}
							</div>
						)}
						{!fundsData.loading && renderFunds()}
					</Paper>
				</div>
			</Box>
		</Container>
	);
}
