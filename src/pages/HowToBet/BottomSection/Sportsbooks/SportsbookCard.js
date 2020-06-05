import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #F2F4F5',
    borderRadius: 4,
    backgroundColor: 'white',
    width: 154,
    height: 101,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      '& &': {
        marginLeft: 10,
      },
      marginRight: 0,
      marginBottom: theme.spacing(1),
    },
  },
  grid: {
    height: '100%',
  },
  image: {
    width: 88,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: '0.02em',
    fontFamily: 'Regular',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    letterSpacing: '0.02em',
    fontWeight: 'normal',
    fontFamily: 'Regular',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

export default ({ image, score }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.grid}
      >
        <Grid item sm={12} className={classes.image}>
          <img src={image} alt="" width="auto" height="auto" />
        </Grid>
        <Grid item sm={12} className={classes.score}>
          {score}
        </Grid>
        <Grid item sm={12} className={classes.text}>
          Overall Score
        </Grid>
      </Grid>
    </div>
  );
};
