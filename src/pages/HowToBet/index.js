import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Sidebar from './Sidebar';
import ArticleWrapper from './ArticleWrapper';

import getArticle from './Articles/articles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F9FAFA',
  },
  pageTitle: {
    backgroundColor: 'white',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  container: {
    paddingBottom: theme.spacing(5),
  },
  description: {
    maxWidth: 544,
  },
}));

export default () => {
  const classes = useStyles();
  const { introSlug, blogSlug } = useParams();

  const article = getArticle({ introSlug, blogSlug });

  return (
    <div className={classes.root}>
      <Box className={classes.pageTitle}>
        <Container>
          <Typography variant="h1" gutterBottom>
            How to bet
          </Typography>
          <Typography
            className={classes.description}
            variant="subtitle1"
            gutterBottom
          >
            This is the place to learn how to bet, become a more effective
            bettor, or learn if sports betting is legal in your state. Check out
            our helpful sports betting tutorials and bet smarter today.
          </Typography>
        </Container>
      </Box>
      <Container className={classes.container}>
        <Grid container>
          <Grid item sm={8}>
            <ArticleWrapper {...article} />
          </Grid>
          <Grid item sm={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
