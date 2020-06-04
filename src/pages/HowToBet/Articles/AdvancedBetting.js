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
          abe’s fun and fast sports betting tutorial course helps users learn
          all they need to know to place their first bet. Check out our How to
          Bet module above to brush up on the basic and get ready to make your
          first wager.
        </p>
      </Typography>
      <Typography variant="h3">Why do people bet on sports?</Typography>
      <Typography variant="body1">
        <p>
          Betting makes watching sports more exciting, gives you something new
          to debate with friends and lets you prove your sports-brain
          superiority to the world.
        </p>
        <p>
          In a 2019 interview on NPR's Fresh Air, actor/comedian Adam Sandler
          described the sheer excitement of sports betting to host Terry Gross.
        </p>
        <p>
          "When you bet on a game, [and] I do bet sometimes," Sandler said, "you
          watch so close when you have money on a game, and it means something
          to you. [But] it's not only the money. You made this decision in your
          head. You told everyone on the planet, this is going to happen."
        </p>
        <p>
          Sandler continued, "So you're watching the game with a different
          energy. And honest to God, when you make a bet on something and the
          game starts at 7:05, your body is shaking at two in the afternoon
          going, it's coming. It's coming. When you get to that actual game,
          there is so much excitement, you can't contain it."
        </p>
        <p>Sounds awesome, right?</p>
        <p>Well, it is.</p>
        <p>
          As we get ready to dive into the world of wagering, it's critical to
          understand the three basic types of bets you'll encounter in the
          sports betting world: moneyline, point spread (often just referred to
          as a "spread" or "spread betting") and total (sometimes called the
          over/under).
        </p>
        <p>
          Once you master the three main bet types, you'll be one step closer to
          becoming a sports betting samurai, armed with the knowledge you need
          to take on the competition.
        </p>
      </Typography>
      <Box className={classes.cta}>
        <Button variant="contained" color="primary">
          CTA
        </Button>
      </Box>
      <Typography variant="h3">What is a moneyline?</Typography>
      <Typography variant="body1">
        <p>
          When you make a moneyline bet (some spell it "money line"), you're
          making an outright call on which team will win in a head-to-head
          contest (except in the rare case of European Football, in which you
          can also bet on a tie). Betting terminology can be confusing, so it
          may be helpful to remember that in a moneyline bet, you're putting
          your money on the line in anticipation of your chosen team winning the
          game.
        </p>{' '}
        <p>
          While determining the outcome of a moneyline bet is extremely
          straightforward - you win the bet if your chosen team wins - moneyline
          odds, or payouts, require some further explanation. Check out our
          detailed explanation of moneyline bets{' '}
          <b style={{ cursor: 'pointer' }}>
            <u>here to learn more.</u>
          </b>
        </p>
      </Typography>
      <Typography variant="h3">How do I read a point spread?</Typography>
      <Typography variant="body1">
        <p>
          A great equalizer, point spreads add even more intrigue to the betting
          proceedings, often turning a lopsided game into a thrill ride. If
          you're familiar with golf handicaps, this is a similar concept. The
          spread aims to level out the playing field by adding or subtracting
          points from a team's actual score in order to determine their score
          for betting purposes. When you look at a spread bet, you’ll see a plus
          or minus with a number next to it - the spread - alongside the “price”
          of the bet - typically 100 to 110. Simply take the actual score in the
          game and add or subtract the spread (depending on whether the number
          is positive or negative) in order to arrive at the game’s score for
          betting purposes. Whichever team has the highest spread-adjusted score
          wins the game for the purposes of the bet.{' '}
          <b style={{ cursor: 'pointer' }}>
            <u>Click here</u>
          </b>{' '}
          to learn more about spread bets.
        </p>
      </Typography>
      <Typography variant="h3">What is an over/under bet?</Typography>
      <Typography variant="body1">
        <p>
          An over/under bet is a wager on the total amounts scored by both teams
          combined. If the over/under on an NBA game is 200, for example, and
          you bet the over, you win if the score of both teams added together is
          greater than 200. If you bet the under, you win if the combined scores
          sum to less than 200.
        </p>
      </Typography>
      <Typography variant="h3">What is a total bet?</Typography>
      <Typography variant="body1">
        <p>
          A total is another term for an over/under bet since you’re betting on
          the total score of the game.
        </p>
      </Typography>
      <Typography variant="h3">What is a parlay?</Typography>
      <Typography variant="body1">
        <p>
          A parlay is a single wager with multiple bets, all of which must be
          fulfilled to win. For instance, your parlay from a Houston Rockets/San
          Antonio Spurs game might include the Spurs winning the tipoff, then
          the Rockets leading at halftime, then James Harden scoring more than
          25 points. While parlays typically have large payouts, they're also
          inherently lower probability bets given the math behind{' '}
          <b style={{ cursor: 'pointer' }}>
            <u>conditional probability.</u>
          </b>
        </p>
      </Typography>
      <Typography variant="h3">
        How do I learn about advanced betting strategies?
      </Typography>
      <Typography variant="body1">
        <p>
          In addition to the how to bet tutorials above, you can also delve into
          more complex betting concepts like{' '}
          <b style={{ cursor: 'pointer' }}>
            <u>implied probability</u>
          </b>
          , synthetic yield and viewing sports betting as market.
        </p>
      </Typography>
      <Typography variant="h3">
        How can I suggest a sports betting topic for abe to cover?
      </Typography>
      <Typography variant="body1">
        <p>
          Shoot an e-mail to{' '}
          <b style={{ cursor: 'pointer' }}>
            <u>crew@abebets.com</u>
          </b>{' '}
          with any questions, suggestions or concerns, and we’ll make sure to
          address them.
        </p>
      </Typography>
    </div>
  );
};
