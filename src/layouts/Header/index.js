import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import logoWithText from '../../assets/icons/logo_with_text.svg';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MuiListItemText from '@material-ui/core/ListItemText';
import ListItemText from '@material-ui/core/ListItemText';

import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiDivider from '@material-ui/core/Divider';

import Marker from '../../assets/icons/marker.svg';

const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& header': {
      boxShadow: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
    paddingLeft: theme.spacing(2),
    color: '#CED7DB',
  },
  title: {
    flexGrow: 1,
  },
  navLinkGroup: {
    '& a': {
      fontFamily: 'Regular',
      fontWeight: 600,
      letterSpacing: '0.02em',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      lineHeight: '48px',
      textDecoration: 'none',
      position: 'relative',
      paddingTop: '18px',
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
      },

      '&.active': {
        content: '',
        borderWidth: '0 0 2px',
        borderStyle: 'solid',
        borderColor: '#0C40FC',
        color: '#0C40FC',
      },
    },
    display: 'flex',
    marginLeft: '40px',
    [theme.breakpoints.down('md')]: {
      marginLeft: 18,
    },
  },
  loginBtn: {
    marginRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: '18px',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  desktopToolBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    minHeight: '64px',
  },
  mobileToolBar: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    paddingRight: 0,
    justifyContent: 'space-between',
    minHeight: '56px',
  },
  closeMenuButton: {
    marginLeft: 'auto',
    marginRight: 0,
    color: '#CED7DB',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  heading: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Regular',
    fontWeight: 600,
    padding: 8,
  },
  subMenu: {
    fontFamily: 'Regular',
    fontSize: 16,
    lineHeight: 32,
    color: '#000000',
  },
  bottomSection: {
    background: '#F9FAFA',
    height: '100%',
  },
  mobileSignupButton: {
    width: 104,
    height: 40,
  },
  mobileLoginButton: {
    width: 93,
    height: 40,
    background: 'white',
    color: '#0C40FC',
  },
  location: {
    paddingTop: '18px',
    '& img': {
      paddingRight: 8,
    },
    fontFamily: 'Regular',
    fontWeight: 600,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      marginRight: 0,
    },
  },
}));

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: 0,
  },
}))(MuiExpansionPanelDetails);

const MainMenuListItemText = withStyles((theme) => ({
  root: {
    padding: 8,
  },
  primary: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Regular',
    fontWeight: 600,
    '& img': {
      marginRight: 8,
    },
  },
}))(MuiListItemText);

const SubMenuListItemText = withStyles((theme) => ({
  root: {
    paddingLeft: 8,
    paddingTop: 0,
  },
  primary: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Regular',
    lineHeight: '32px',
  },
}))(MuiListItemText);

const FutureSubMenuListText = withStyles((theme) => ({
  root: {
    paddingLeft: 8,
  },
  primary: {
    color: '#697D87',
    fontSize: 12,
    fontFamily: 'Regular',
    fontWeight: 600,
    marginBottom: 2,
  },
  secondary: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Regular',
    fontWeight: 600,
    '& a': {
      marginRight: 30,
    },
  },
}))(MuiListItemText);

const Divider = withStyles((theme) => ({
  root: {
    background: '#F9FAFA',
    osition: 'static',
    flex: 'none',
    order: 9,
    marginLeft: 16,
    marginRight: 16,
  },
}))(MuiDivider);

export const Header = () => {
  const classes = useStyles();

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Container style={{ padding: 0 }}>
          <Toolbar className={classes.desktopToolBar}>
            <img src={logoWithText} alt="" />
            <Box className={classes.navLinkGroup} style={{ padding: 0 }}>
              <NavLink
                activeClassName="active"
                activeStyle={{ color: 'red' }}
                to="/odds"
              >
                Odds
              </NavLink>
              <NavLink activeClassName="active" to="/futures">
                Futures
              </NavLink>
              <NavLink activeClassName="active" to="/how-to-bet">
                How To Bet
              </NavLink>
              <NavLink activeClassName="active" to="/legalization">
                Legalization
              </NavLink>
              <NavLink activeClassName="active" to="/insights">
                Insights
              </NavLink>
              <NavLink activeClassName="active" to="/reviews">
                Reviews
              </NavLink>
              <NavLink activeClassName="active" to="/deals">
                Deals
              </NavLink>
            </Box>
            <span className={classes.location}>
              <img src={Marker} alt="" />
              New Jersey
            </span>
            <Button
              className={classes.loginBtn}
              color="primary"
              style={{
                height: 40,
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Regular',
                letterSpacing: '0.02em',
              }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginTop: '18px',
                height: 40,
                width: 88,
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Regular',
                letterSpacing: '0.02em',
              }}
            >
              Sign Up
            </Button>
          </Toolbar>

          <Toolbar className={classes.mobileToolBar}>
            <img
              src={logoWithText}
              alt=""
              style={{ width: '71px', height: '32px' }}
            />
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem>
                <MainMenuListItemText
                  className={classes.heading}
                  primary={
                    <NavLink activeClassName="active" to="/futures">
                      Odds
                    </NavLink>
                  }
                />
              </ListItem>
              <Divider />
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Futures</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <List>
                    <ListItem>
                      <FutureSubMenuListText
                        primary="Football"
                        secondary={
                          <div>
                            <NavLink activeClassName="active" to="/futures">
                              NFL
                            </NavLink>
                            <NavLink activeClassName="active" to="/futures">
                              NCAAF
                            </NavLink>
                          </div>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <FutureSubMenuListText
                        primary="Basketball"
                        secondary={
                          <div>
                            <NavLink activeClassName="active" to="/futures">
                              NBA
                            </NavLink>
                            <NavLink activeClassName="active" to="/futures">
                              NCAAB
                            </NavLink>
                          </div>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <FutureSubMenuListText
                        primary="Baseball"
                        secondary={
                          <NavLink activeClassName="active" to="/futures">
                            MLB
                          </NavLink>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <FutureSubMenuListText
                        primary="Hockey"
                        secondary={
                          <NavLink activeClassName="active" to="/futures">
                            NHL
                          </NavLink>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <FutureSubMenuListText
                        primary="Golf"
                        secondary={
                          <NavLink activeClassName="active" to="/futures">
                            PGA
                          </NavLink>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <FutureSubMenuListText
                        primary="Tennis"
                        secondary={
                          <div>
                            <NavLink activeClassName="active" to="/futures">
                              ATP
                            </NavLink>
                            <NavLink activeClassName="active" to="/futures">
                              WTA
                            </NavLink>
                          </div>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <FutureSubMenuListText
                        primary="MMA"
                        secondary={
                          <NavLink activeClassName="active" to="/futures">
                            UFC
                          </NavLink>
                        }
                      />
                    </ListItem>
                  </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Divider />
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    How To Bet
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <List>
                    <ListItem>
                      <SubMenuListItemText
                        className={classes.subMenu}
                        primary={
                          <NavLink activeClassName="active" to="/futures">
                            Betting 101
                          </NavLink>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <SubMenuListItemText
                        className={classes.subMenu}
                        primary={
                          <NavLink activeClassName="active" to="/futures">
                            Advanced Betting Concepts
                          </NavLink>
                        }
                      />
                    </ListItem>
                  </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Divider />
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Legalization
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <List>
                    <ListItem>
                      <SubMenuListItemText
                        className={classes.subMenu}
                        primary={
                          <NavLink activeClassName="active" to="/futures">
                            Legalization Tracker
                          </NavLink>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <SubMenuListItemText
                        className={classes.subMenu}
                        primary={
                          <NavLink activeClassName="active" to="/futures">
                            Guide to the Online Sports Betting Ecosystemr
                          </NavLink>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <SubMenuListItemText
                        className={classes.subMenu}
                        primary={
                          <NavLink activeClassName="active" to="/futures">
                            Introducing PASPA
                          </NavLink>
                        }
                      />
                    </ListItem>
                  </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Divider />
              <ListItem>
                <MainMenuListItemText
                  className={classes.heading}
                  primary={
                    <NavLink activeClassName="active" to="/futures">
                      Insights
                    </NavLink>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem>
                <MainMenuListItemText
                  className={classes.heading}
                  primary={
                    <NavLink activeClassName="active" to="/futures">
                      Reviews
                    </NavLink>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem>
                <MainMenuListItemText
                  className={classes.heading}
                  primary={
                    <NavLink activeClassName="active" to="/futures">
                      Deals
                    </NavLink>
                  }
                />
              </ListItem>
            </List>
            <List className={classes.bottomSection}>
              <ListItem>
                <MainMenuListItemText
                  primary={
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={Marker} alt="" />
                      New Jersey
                    </span>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Button
                      variant="contained"
                      className={classes.mobileSignupButton}
                      color="primary"
                      style={{
                        fontFamily: 'Regular',
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}
                    >
                      Sign Up
                    </Button>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Button
                      className={classes.mobileLoginButton}
                      color="inherit"
                      style={{
                        fontFamily: 'Regular',
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}
                    >
                      Log In
                    </Button>
                  }
                />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};
