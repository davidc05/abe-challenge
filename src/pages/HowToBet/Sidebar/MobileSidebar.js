import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import {
  betting101 as betting101Urls,
  advancedBetting as advancedBettingUrls,
} from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1300,
  },
  buttonWrapper: {
    display: 'flex',
    borderTop: '1px solid #F2F4F5',
    borderBottom: '1px solid #F2F4F5',
    '& a': {
      flex: 1,
      backgroundColor: '#F9FAFA',
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: 'nowrap',
    },
    '& a + a': {
      borderLeft: '1px solid #F2F4F5',
    },
    '& a.active': {
      backgroundColor: 'white',
      color: '#0C40FC',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingTop: 0,
    paddingBottom: 0,
    '& div': {
      margin: 0,
      borderBottom: '1px solid #F9FAFA',
    },
    '& span': {
      fontWeight: 'normal',
    },
  },
  closeMenuButton: {
    marginLeft: 'auto',
    marginRight: 0,
    color: '#CED7DB',
    width: 64,
    height: 64,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Barlow',
    fontWeight: 300,
    opacity: 0.9,
    padding: theme.spacing(2),
  },
  closeButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listWrapper: {
    padding: 0,
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    betting101: false,
    advanced: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const betting101List = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: true,
      })}
      role="presentation"
      onClick={toggleDrawer('betting101', false)}
      onKeyDown={toggleDrawer('betting101', false)}
    >
      <Grid container direction="row">
        <Grid item xs={8}>
          <Typography className={classes.description}>
            We’ll put you on the path to becoming a successful sports bettor.
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.closeButtonWrapper}>
          <IconButton
            onClick={toggleDrawer('betting101', false)}
            className={classes.closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <List component="div" className={classes.listWrapper}>
        {betting101Urls.map((item) => (
          <ListItem
            button
            component={NavLink}
            to={`/how-to-bet/betting101/${item.slug}`}
            className={classes.nested}
            activeStyle={{
              backgroundColor: '#F4F8FA',
              '& > span': {
                fontWeight: 600,
                color: '#0C40FC !important',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                style: {
                  paddingTop: 16,
                  paddingBottom: 16,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const advancedList = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: true,
      })}
      role="presentation"
      onClick={toggleDrawer('advanced', false)}
      onKeyDown={toggleDrawer('advanced', false)}
    >
      <Grid container direction="row">
        <Grid item xs={8}>
          <Typography className={classes.description}>
            Take your sports betting game to the next level with advice from the
            pros.
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.closeButtonWrapper}>
          <IconButton
            onClick={toggleDrawer('advanced', false)}
            className={classes.closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <List component="div" className={classes.listWrapper}>
        {advancedBettingUrls.map((item) => (
          <ListItem
            button
            component={NavLink}
            to={`/how-to-bet/advanced/${item.slug}`}
            className={classes.nested}
            activeStyle={{
              backgroundColor: '#F4F8FA',
              '& span': {
                fontWeight: 600,
                color: '#0C40FC',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                style: {
                  paddingTop: 16,
                  paddingBottom: 16,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Box className={classes.buttonWrapper}>
        <Button
          component={NavLink}
          to="/how-to-bet/betting101"
          onClick={toggleDrawer('betting101', true)}
        >
          Betting 101
        </Button>
        <Button
          component={NavLink}
          to="/how-to-bet/advanced"
          onClick={toggleDrawer('advanced', true)}
        >
          Advanced Betting Concepts
        </Button>
      </Box>
      <Drawer
        anchor="top"
        open={state['betting101']}
        onClose={toggleDrawer('betting101', false)}
      >
        {betting101List()}
      </Drawer>
      <Drawer
        anchor="top"
        open={state['advanced']}
        onClose={toggleDrawer('advanced', false)}
      >
        {advancedList()}
      </Drawer>
    </div>
  );
}
