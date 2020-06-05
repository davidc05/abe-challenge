import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import InsightCard from './InsightCard';
import data from './data';
import Slider from './Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#F9FAFA',
      marginBottom: 0,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
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
          Insights
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="h2" className={classes.title}>
          Latest Insights
        </Typography>
      </Hidden>
      <Hidden mdDown>
        <Grid container>
          {data.map((item, idx) => (
            <InsightCard key={idx} {...item} />
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Slider />
      </Hidden>
    </div>
  );
};
