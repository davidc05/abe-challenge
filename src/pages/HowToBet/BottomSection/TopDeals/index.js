import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import data from './data';

import TopDealRow from './TopDealRow';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #F2F4F5',
    borderRadius: 4,
    maxWidth: 344,
    marginLeft: 'auto',
  },
  content: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h3" className={classes.title}>
          Top Deals Today
        </Typography>
        <Grid container>
          {data.map((item, idx) => (
            <TopDealRow key={idx} last={idx === data.length - 1} {...item} />
          ))}
        </Grid>
      </div>
    </div>
  );
};
