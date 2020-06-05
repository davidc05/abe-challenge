import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import data from './data';
import TopDealRow from './TopDealRow';
import Slider from './Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #F2F4F5',
    borderRadius: 4,
    maxWidth: 344,
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      border: 'none',
      paddingBottom: theme.spacing(5),
    },
  },
  content: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(3),
      fontSize: 24,
    },
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Hidden smDown>
          <Typography variant="h3" className={classes.title}>
            Top Deals Today
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h2" className={classes.title}>
            Top Deals
            <br />
            in [New Jersey]
          </Typography>
        </Hidden>
        <Hidden smDown>
          <Grid container>
            {data.map((item, idx) => (
              <TopDealRow key={idx} last={idx === data.length - 1} {...item} />
            ))}
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Slider />
        </Hidden>
      </div>
    </div>
  );
};
