import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 375,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    marginLeft: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(7),
  },
}));

const betting101 = [
  { label: 'Sports Betting Explained', slug: 'sports-betting' },
  { label: 'Betting Odds Explained', slug: 'betting-odds' },
  { label: '5 Key Pieces of Sports Betting Advice', slug: 'key-pieces' },
  {
    label: 'How to Find the Best Odds with an Odds Comparison Engine',
    slug: 'best-odds',
  },
  {
    label: 'How and Why to Use a Legal Online Sportsbook',
    slug: 'legal-online',
  },
  {
    label: 'An Exhaustive Guide to Sports Betting Terms',
    slug: 'exhaustive-guide',
  },
  { label: 'Sports Betting Tips from the Sharps', slug: 'sports-betting' },
  {
    label: 'In-Game Betting: The Thrill of Wagering on Live Sports',
    slug: 'in-game',
  },
];

const advancedBetting = [
  {
    label: 'Using Implied Probability to Find Sports Betting Value',
    slug: 'implied-probability',
  },
  { label: '“Synthetic Hold” Concept', slug: 'synthetic-hold' },
  { label: 'Viewing Sports Betting as a Market', slug: 'view-sports' },
  {
    label: 'Assessing Strength or Weakness of Sports Betting Markets',
    slug: 'accessing',
  },
];

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState({});

  const handleClick = (listName) => {
    setOpen({ [listName]: !open[listName] });
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem
        button
        component={NavLink}
        to="/how-to-bet/betting101"
        onClick={() => handleClick('betting101')}
      >
        <ListItemIcon>
          {open.betting101 ? (
            <RemoveIcon color={open.betting101 ? 'primary' : 'initial'} />
          ) : (
            <AddIcon color={open.betting101 ? 'primary' : 'initial'} />
          )}
        </ListItemIcon>
        <ListItemText
          primary="Betting 101"
          secondary="We’ll put you on the path to becoming a successful sports bettor."
          primaryTypographyProps={{
            color: open.betting101 ? 'primary' : 'initial',
          }}
        />
      </ListItem>
      <Collapse in={open.betting101} timeout="auto" unmountOnExit>
        <List component="div">
          {betting101.map((item) => (
            <ListItem
              button
              component={NavLink}
              to={`/how-to-bet/betting101/${item.slug}`}
              className={classes.nested}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem
        button
        component={NavLink}
        to="/how-to-bet/advanced"
        onClick={() => handleClick('advanced')}
      >
        <ListItemIcon>
          {open.advanced ? (
            <RemoveIcon color={open.advanced ? 'primary' : 'initial'} />
          ) : (
            <AddIcon color={open.advanced ? 'primary' : 'initial'} />
          )}
        </ListItemIcon>
        <ListItemText
          primary="Advanced Betting Concepts"
          secondary="Take your sports betting game to the next level with advice from the pros."
          primaryTypographyProps={{
            color: open.advanced ? 'primary' : 'initial',
          }}
        />
      </ListItem>
      <Collapse in={open.advanced} timeout="auto" unmountOnExit>
        <List component="div">
          {advancedBetting.map((item) => (
            <ListItem
              button
              component={NavLink}
              to={`/how-to-bet/advanced/${item.slug}`}
              className={classes.nested}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
