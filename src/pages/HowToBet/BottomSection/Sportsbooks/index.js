import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import SportsbookCard from './SportsbookCard';
import data from './data';
import Slider from './Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
  },
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <Typography variant="h2" className={classes.title}>
          Sportsbooks Reviews
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="h2" className={classes.title}>
          [New Jersey]
          <br />
          Sportsbooks Reviews
        </Typography>
      </Hidden>
      <Hidden mdDown>
        <Grid container>
          {data.map((item, idx) => (
            <SportsbookCard key={idx} {...item} />
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Slider />
      </Hidden>
    </div>
  );
};
