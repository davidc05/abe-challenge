import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import twitterIcon from '../../assets/icons/twitter.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& header': {
      boxShadow: 'none',
    },
  },
  instagram: {
    marginRight: theme.spacing(3),
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item sm={1} alignItems="center">
                <img className={classes.instagram} src={instagramIcon} alt="" />
                <img src={twitterIcon} alt="" />
              </Grid>
              <Grid item sm={4}>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/how-works">How abe works</NavLink>
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/terms">Terms of Service</NavLink>
              </Grid>
              <Grid item sm={7}>
                © 2020 PopOdds inc. Reserved. If you or someone you know has a
                gambling problem and wants help, call 1-800-Gambler. You must be
                21 years or older to place a bet.
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
