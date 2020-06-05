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
  footerNavigation: {
    paddingLeft: '12px',
    paddingRight: '12px',
  }
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
              <Grid item sm={5}>
                <NavLink className={classes.footerNavigation} to="/about-us">About Us</NavLink>
                <NavLink className={classes.footerNavigation} to="/how-works">How abe works</NavLink>
                <NavLink className={classes.footerNavigation} to="/privacy">Privacy Policy</NavLink>
                <NavLink className={classes.footerNavigation} to="/terms">Terms of Service</NavLink>
              </Grid>
              <Grid item sm={6}>
                <p> © 2020 PopOdds inc. Reserved. </p>
                <p> If you or someone you know has a gambling problem and wants help, call 1-800-Gambler. You must be 21 years or older to place a bet. </p>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
