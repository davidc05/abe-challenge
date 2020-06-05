import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { ScrollToTop } from '../../../components';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 780,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  title: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  content: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(5),
  },
  next: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    '& p': {
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      marginRight: theme.spacing(1),
      display: 'flex',
    },
    marginTop: theme.spacing(4),
  },
}));

export default ({ title, image, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Box>
          <img src={image} alt="" width="100%" />
        </Box>
        <Box className={classes.content}>{content}</Box>
        <ScrollToTop />
      </div>
      <Box className={classes.next}>
        <Typography color="primary">Next: Sports Betting Explained</Typography>
        <ArrowRightAltIcon color="primary" fontSize="large" />
      </Box>
    </div>
  );
};
