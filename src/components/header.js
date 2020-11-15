import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));



function Header() {
	const classes = useStyles();
	
	
	return (
		<div className="container">
		<React.Fragment>
			<CssBaseline />

			
			<AppBar
				position="static"
				color="default"
				elevation={0}
                className={classes.appBar}
                style={{backgroundColor: '#ADD8E6'}}
			>
				<Toolbar className={classes.toolbar } >

					<Typography
						variant="h6"
						color="inherit"
						noWrap
						className={classes.toolbarTitle}
					>

       
						<Link
							component={NavLink}
							to="/"
							underline="none"
							color="white"
						>
							Blog
						</Link>
					</Typography>


					<nav>
						<Link
							color=""
							href="#"
							className={classes.link}
							component={NavLink}
							to="/register"
						>
							REGISTER
						</Link>
					</nav>


					<Button
					href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/login"
					>
						LOGIN 
						
					</Button>
					 
				
						<Button
						href="#"
							color="primary"
							variant="outlined"
							className={classes.link}
							component={NavLink}
							to="/logout"
						>
							LOGOUT 
							
						</Button>
			
					
                 
				</Toolbar>
			</AppBar>
				



        


		</React.Fragment>
		</div>
	);
}

export default Header;