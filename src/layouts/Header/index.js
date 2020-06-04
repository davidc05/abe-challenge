import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import logoWithText from '../../assets/icons/logo_with_text.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& header': {
      boxShadow: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinkGroup: {
    '& a': {
      fontFamily: 'Regular',
      fontWeight: 600,
      letterSpacing: '0.02em',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  loginBtn: {
    marginLeft: 'auto',
    marginRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <img src={logoWithText} alt="" />
            <Box className={classes.navLinkGroup}>
              <NavLink activeClassName="active" to="/odds">
                Odds
              </NavLink>
              <NavLink activeClassName="active" to="/futures">
                Futures
              </NavLink>
              <NavLink activeClassName="active" to="/about">
                How To Bet
              </NavLink>
              <NavLink activeClassName="active" to="/legalization">
                Legalization
              </NavLink>
              <NavLink activeClassName="active" to="/insights">
                Insights
              </NavLink>
              <NavLink activeClassName="active" to="/reviews">
                Reviews
              </NavLink>
              <NavLink activeClassName="active" to="/deals">
                Deals
              </NavLink>
            </Box>
            <Button className={classes.loginBtn} color="inherit">
              Log In
            </Button>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
