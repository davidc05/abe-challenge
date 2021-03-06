import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Sidebar from './Sidebar';
import MobileSidebar from './Sidebar/MobileSidebar';
import ArticleWrapper from './ArticleWrapper';

import getArticle from './Articles/articles';
import BottomSection from './BottomSection';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F9FAFA',
  },
  pageTitle: {
    backgroundColor: 'white',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '& h1': {
        fontSize: 28,
      },
      '& h6': {
        fontSize: 16,
      },
    },
  },
  container: {
    paddingBottom: theme.spacing(5),
  },
  description: {
    maxWidth: 544,
  },
  bottomSection: {
    backgroundColor: 'white',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  sidebar: {
    paddingLeft: theme.spacing(2),
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none',
    // },
  },
}));

export default () => {
  const classes = useStyles();
  const { introSlug, blogSlug } = useParams();

  const article = getArticle({ introSlug, blogSlug });

  return (
    <>
      <Hidden mdUp>
        <MobileSidebar />
      </Hidden>
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
              bettor, or learn if sports betting is legal in your state. Check
              out our helpful sports betting tutorials and bet smarter today.
            </Typography>
          </Container>
        </Box>
        <Container className={classes.container}>
          <Grid container>
            <Grid item sm={12} md={8}>
              <ArticleWrapper {...article} />
            </Grid>
            <Hidden smDown>
              <Grid item sm={12} md={4} className={classes.sidebar}>
                <Sidebar />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </div>
      <Container className={classes.bottomSection}>
        <BottomSection />
      </Container>
    </>
  );
};
