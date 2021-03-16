import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
	media: {
		height: 360,
	},
}));

export default function About() {
	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<Box component="span" m={1}>
				<Card>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="https://image.slidesharecdn.com/candidatepack2019-191031140816/95/welcome-to-publicis-sapient-london-1-638.jpg?cb=1574345204"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
                Publicis Sapient
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
                Publicis Sapient is a digital business transformation company,
                founded in Cambridge, Massachusetts in 1990 by Jerry Greenberg
                and J. Stuart Moore.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
              Share
						</Button>
						<Button size="small" color="primary">
              Learn More
						</Button>
					</CardActions>
				</Card>
			</Box>
		</Container>
	);
}
