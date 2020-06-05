import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Sportsbooks from './Sportsbooks';
import TopDeals from './TopDeals';
import Insights from './Insights';
import BetSmarter from './BetSmarter';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={8}>
          <Sportsbooks />
        </Grid>
        <Grid item sm={12} md={4}>
          <TopDeals />
        </Grid>
        <Grid item sm={12} md={8}>
          <Insights />
        </Grid>
        <Grid item sm={12} md={4}>
          <BetSmarter />
        </Grid>
      </Grid>
    </div>
  );
};
