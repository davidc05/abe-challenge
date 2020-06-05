import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import InsightCard from './InsightCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Insights
      </Typography>
      <Grid container>
        {data.map((item, idx) => (
          <InsightCard key={idx} {...item} />
        ))}
      </Grid>
    </div>
  );
};
