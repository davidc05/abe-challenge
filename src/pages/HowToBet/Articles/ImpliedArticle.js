import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  cta: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    fontFamily: 'Regular',
    '& button': {
      width: 82,
      height: 40,
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: '0.02em',
    },
  },
  content: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(5),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="body1">
        <p>
          Implied probability in sports betting is defined as, "a conversion of
          betting odds into a percentage taking into account the bookmaker
          margin to express the expected probability of an outcome occurring."
        </p>
        <p>
          For the sake of greater simplicity: implied probability uses basic
          math to convert traditional odds expressed in the form of a payout
          (i.e. +500) into a percentage. That percentage tells you what the
          market expects the outcome of the event to be – these are also
          referred to as a implied odds.
        </p>
        <p>
          When it comes to odds, if the “true” probability is greater than the
          implied probability, the better value the bet is. Let’s try to break
          down this advanced betting strategy into a more digestible, tactile
          form so you can make use of the concept when you place your next
          wager.
        </p>
      </Typography>
      <Typography variant="h3">
        How do I convert sports betting odds into an implied probability?
      </Typography>
      <Typography variant="body1">
        <p>
          Before we dive into implied probability, let's revisit a key component
          of the formula, that being plus and minus odds.
        </p>
        <p>
          The team expected to win any given game — i.e. the favorite — will
          sport minus or negative odds. For example, say the Oklahoma City
          Thunder moneyline odds are -120 in their game against the Golden State
          Warriors. This means if you bet OKC, you're risking $120 to make a
          $100 profit.
        </p>
        <p>
          To work out the implied probability for the Warriors-Thunder matchup,
          you need to plug the numbers into this equation:
        </p>
        <p>
          <b>
            <i>(-odds / odds +100) * 100 = implied probability</i>
          </b>
          <br />
          (And you thought you'd never need to know algebra after you graduated
          high school.)
        </p>
        <p>
          The first thing we'll do for our calculation is remove the minus
          signs, turning -120 into 120. Next, we add 100, which gives us 120
          +100 = 220. We then divide the 120 by 220 and end up with 0.545. Then,
          we turn this into a percentage by multiplying by 100, giving us an
          implied probability of 54.5%.
        </p>
        <p>
          All this is a roundabout way of telling us that the Thunder have a
          54.5% chance of winning the game, as implied by the moneyline payout. 
          This means that if you think the Thunder has a >54.5% chance of
          winning the game, you should bet the Thunder moneyline.
        </p>
        <p>
          For odds represented with a plus symbol, the equation is slightly
          different, but the process is much the same...and as all Philadelphia
          76ers fans know, you always{' '}
          <b style={{ cursor: 'pointer' }}>
            <u>Trust the Process.</u>
          </b>
        </p>
        <p>
          Speaking of the Sixers, let’s say they’re +200 underdogs against a
          piping-hot Celtics squad in Boston. This means if you bet $100 and the
          Sixers win, you'll earn a $200 profit.
        </p>
        <p>
          As for this iteration of implied probability, we first divide 100 by
          (200 + 100) which gives us 100/300 or 0.33. We then multiply that
          number by 100 to get an implied probability percentage of 33%.
          Algebra-wise, it looks like this.
        </p>
        <b>
          <i>100 / (200 + 100) = 0.33</i>
        </b>
        <br />
        <b>
          <i>0.33 * 100 = 33%</i>
        </b>
      </Typography>
      <Box className={classes.cta}>
        <Button variant="contained" color="primary">
          CTA
        </Button>
      </Box>
      <Typography variant="h3">
        How implied probability can help you become an advanced sports bettor
      </Typography>
      <Typography variant="body1">
        <p>
          Lower implied probability means a higher payout; higher implied
          probability means a lower payout. Your ultimate goal is to find odds
          for which the implied probability differs meaningfully from your
          assessment of the true probability.
        </p>
        <p>
          Let's go back to our Philly-Boston contest. The Sixers' 33% implied
          probability means they've been given a one-in-three opportunity of
          winning that game. If you think the true chances of Philadelphia
          posting a “W” are closer to 50% — or one-in-two — then hit up your
          sportsbook and get on the Sixers bandwagon before the odds drift.
        </p>
        <p>
          Becoming an implied probability expert won't guarantee you regular
          betting victories, yet it's a useful concept to have in your wagering
          arsenal.
        </p>
        <p>
          This process encourages you to consult multiple sportsbooks or use an
          odds comparison machine. Once you calculate the implied probability,
          you’ll want to find the odds that net you the maximum profit for
          whichever side you’re betting on.
        </p>
      </Typography>
    </div>
  );
};
