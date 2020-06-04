import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ScrollToTop } from '../../../components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 4,
    maxWidth: 780,
    width: '100%',
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
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(5),
  },
}));

export default ({ title, image, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {title}
      </Typography>
      <Box>
        <img src={image} alt="" width="100%" />
      </Box>
      <Box className={classes.content}>{content}</Box>
      <ScrollToTop />
    </div>
  );
};
