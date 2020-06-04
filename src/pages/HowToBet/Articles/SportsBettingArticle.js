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
          Some may argue sports are entertaining enough to watch without any
          money at stake, yet there’s something about a good bet that adds
          adrenaline to the action that and makes the proceedings more
          exhilarating.
        </p>
        <p>
          In this entry of our sports betting explanation series, we’ll examine
          why people love to bet on sports and shed some light on why there’s a
          nationwide movement to legalize sports betting.
        </p>
      </Typography>
      <Typography variant="h3">Why do people bet on sports?</Typography>
      <Typography variant="body1">
        <p>
          Betting makes watching sports more exciting, gives you something new
          to debate with friends and lets you prove your superior sports
          knowledge to the world.
        </p>
        <p>
          To begin, though, let’s direct our attention to a celebrity
          endorsement; a sports fan known as “Sandman.” In a{' '}
          <b style={{ cursor: 'pointer' }}>
            <u>2019 interview on NPR's Fresh Air</u>
          </b>
          , actor/comedian Adam Sandler described the sheer excitement of sports
          betting to host Terry Gross.
        </p>
        <p>
          "When you bet on a game, [and] I do bet sometimes," Sandler said, "You
          watch so close when you have money on a game, and it means something
          to you. [But] it's not only the money. You made this decision in your
          head. You told everyone on the planet, this is going to happen."
          Sandler continued, "So you're watching the game with a different
          energy. And honest to God, when you make a bet on something and the
          game starts at 7:05, your body is shaking at two in the afternoon
          going, it's coming. It's coming. When you get to that actual game,
          there is so much excitement, you can't contain it."
        </p>
        <p>Sounds awesome, right? Well, it is.</p>
      </Typography>
      <Typography variant="h3">
        Sports are a unifying force — and betting enhances the experience
      </Typography>
      <Typography variant="body1">
        <p>
          Sports bring people together in a way that few other things can. It’s
          a pure form of mass entertainment that even helps in the real world!
        </p>
        <p>
          When you have to network, sports can be a strong icebreaker that
          creates a meaningful connection and gets people talking about
          something they’re passionate about, as opposed to something
          work-related.
          <br /> That can be a nice, organic way in to an otherwise
          nerve-wracking or potentially awkward situation. Plus, with how
          widespread legal sports betting is becoming, it’ll only continue to
          develop in prominence in casual conversation.
        </p>
        <p>
          Adding responsible betting to the mix of sports makes the stakes go
          way up and improves the viewing experience, as Mr. Sandler so
          eloquently put it. It can pique your interest in a game or match you’d
          otherwise pay little attention to — and can even be a profitable way
          to spend your time in the end. Even a minimal wager can get the blood
          and adrenaline flowing, and we’ll do our best to prepare you as well
          as possible to jump in on the fun and win more often than most.
        </p>
      </Typography>
      <Box className={classes.cta}>
        <Button variant="contained" color="primary">
          CTA
        </Button>
      </Box>
      <Typography variant="h3">
        Step 1: Learn about the main Bet Types
      </Typography>
      <Typography variant="body1">
        <p>
          As we get ready to dive into the world of wagering, it's critical to
          understand the three basic types of bets you'll encounter in the
          sports betting world: moneyline, point spread (often just referred to
          as a "spread" or "spread betting") and total (sometimes called the
          over/under).
        </p>
        <p>
          Once you master the three main bet types, you'll be one step closer to
          becoming a sports betting wizard, armed with the sorcery and tricks
          you need to earn bragging rights over your (hopefully) friendly
          competition.
        </p>
        <p>
          Our first lessons on sports betting will introduce you to the three
          main bet types you'll encounter along your sports betting journey:
          moneyline, spread and total (or, Over/Under). Prepare to master the
          basics, and get ready to open yourself up to a new, exciting world on
          the legalized sports betting frontier.
        </p>
      </Typography>
    </div>
  );
};
