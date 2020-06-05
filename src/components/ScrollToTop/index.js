import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    bottom: 20,
    right: 0,
    textAlign: 'right',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#88979E',
    opacity: 0.2,
    borderRadius: '4px 0px 0px 4px',
    width: 40,
    height: 40,
    color: 'white',
    transition: 'all .2s ease',
    '&:hover': {
      backgroundColor: '#88979E',
      opacity: 0.5,
    },
  },
}));

export const ScrollToTop = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button
        className={classes.button}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Box>
  );
};
