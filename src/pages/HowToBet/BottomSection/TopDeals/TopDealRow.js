import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    width: '100%',
  },
  container: {
    height: 64,
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  text: {
    fontWeight: 600,
    fontFamily: 'Regular',
    fontSize: 16,
    letterSpacing: '0.02em',
    maxWidth: 150,
  },
  imageArea: {
    width: 78,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  divider: {
    backgroundColor: '#F9FAFA',
  },
  arrowRight: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
  },
}));

export default ({ image, text, last }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" className={classes.container}>
        <Grid item sm={7}>
          <Typography className={classes.text}>{text}</Typography>
        </Grid>
        <Grid item sm={4} className={classes.imageArea}>
          <img src={image} alt="" />
        </Grid>
        <Grid item sm={1} className={classes.arrowRight}>
          <ChevronRightIcon fontSize="small" color="primary" />
        </Grid>
      </Grid>
      {!last && <Divider className={classes.divider} />}
    </div>
  );
};
