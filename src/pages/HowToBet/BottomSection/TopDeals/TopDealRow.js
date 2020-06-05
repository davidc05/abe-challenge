import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    width: '100%',
    maxWidth: 316,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(1),
    },
  },
  container: {
    height: 64,
    [theme.breakpoints.down('md')]: {
      border: '1px solid #F2F4F5',
      borderRadius: 4,
      height: 80,
    },
  },
  text: {
    fontWeight: 600,
    fontFamily: 'Regular',
    fontSize: 16,
    letterSpacing: '0.02em',
    maxWidth: 150,
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
    },
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
        <Grid item sm={8} md={7}>
          <Typography className={classes.text}>{text}</Typography>
        </Grid>
        <Grid item sm={4} md={4} className={classes.imageArea}>
          <img src={image} alt="" />
        </Grid>
        <Hidden mdDown>
          <Grid item md={1} className={classes.arrowRight}>
            <ChevronRightIcon fontSize="small" color="primary" />
          </Grid>
        </Hidden>
      </Grid>
      <Hidden mdDown>{!last && <Divider className={classes.divider} />}</Hidden>
    </div>
  );
};
