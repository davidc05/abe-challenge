import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #F2F4F5',
    borderRadius: 4,
    backgroundColor: 'white',
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: 332,
    height: 96,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  text: {
    paddingLeft: theme.spacing(2),
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
}));

export default ({ image, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <div item>
          <img src={image} alt="" width="104px" height="64px" />
        </div>
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  );
};
