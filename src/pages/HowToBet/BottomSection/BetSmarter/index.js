import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import signupCard from '../../../../assets/images/sign_up.png';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #F2F4F5',
    borderRadius: 4,
    maxWidth: 344,
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#F9FAFA',
      maxWidth: '100%',
      border: 'none',
    },
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  description: {
    marginBottom: theme.spacing(3),
  },
  inputArea: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: theme.spacing(5),
    '& input': {
      paddingBottom: theme.spacing(2),
      opacity: 0.9,
    },
  },
  image: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '& img': {
      width: '100%',
      marginTop: 'auto',
    },
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={8} className={classes.inputArea}>
          <div className={classes.title}>
            <Typography variant="h3" color="primary">
              Bet Smarter
            </Typography>
            <Typography variant="h3">with abe Insights</Typography>
          </div>
          <Typography variant="body1" className={classes.description}>
            The 3-minute newsletter with fresh takes on the betting news you
            need to start your day.
          </Typography>
          <TextField
            fullWidth
            className={classes.input}
            placeholder="your-email@email.com"
          />
          <Box>
            <Button variant="contained" color="primary" size="large">
              Sign Up
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.image}>
          <img src={signupCard} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};
