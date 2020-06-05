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
    paddingRight: theme.spacing(3),
    fontSize: '13px',
  },
  copyRight: {
    fontFamily: 'Barlow',
    fontSize: '12px',
    color: '#88979E',
    padding: 0,
    margin: 0,
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
              <Grid container item sm={12} md={12} lg={5} xl={5}>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} alignItems="center" style={{paddingTop: '12px', paddingBottom: '12px'}}>
                  <img className={classes.instagram} src={instagramIcon} alt="" />
                  <img src={twitterIcon} alt="" />
                </Grid>
                <Grid item item xs={12} sm={12} md={12} lg={10} xl={10} style={{paddingTop: '12px', paddingBottom: '12px'}}>
                  <NavLink className={classes.footerNavigation} to="/about-us">About Us</NavLink>
                  <NavLink className={classes.footerNavigation} to="/how-works">How abe works</NavLink>
                  <NavLink className={classes.footerNavigation} to="/privacy">Privacy Policy</NavLink>
                  <NavLink className={classes.footerNavigation} to="/terms">Terms of Service</NavLink>
                </Grid>
              </Grid>
              <Grid item item xs={12} sm={12} md={12} lg={7} xl={7} style={{paddingTop: '12px', paddingBottom: '12px'}}>
                <p className={classes.copyRight}> © 2020 PopOdds inc. Reserved. </p>
                <p className={classes.copyRight}> If you or someone you know has a gambling problem and wants help, call 1-800-Gambler. You must be 21 years or older to place a bet. </p>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
