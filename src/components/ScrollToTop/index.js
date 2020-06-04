import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#88979E',
    opacity: 0.2,
    borderRadius: '4px 0px 0px 4px',
    position: 'sticky',
    bottom: '20px',
    right: 0,
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
    <Button
      className={classes.root}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <KeyboardArrowUpIcon />
    </Button>
  );
};
