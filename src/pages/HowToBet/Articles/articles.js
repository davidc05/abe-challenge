import React from 'react';
import introImage1 from '../../../assets/images/want_to_learn.png';

import introImage2 from '../../../assets/images/betting_101.png';
import introImage3 from '../../../assets/images/sports_betting_explained.png';

import introImage4 from '../../../assets/images/advanced_betting.png';
import introImage5 from '../../../assets/images/using_implied.png';

import RootArticle from './RootArticle';
import AdvancedBetting from './AdvancedBetting';
import Betting101Article from './Betting101Article';
import ImpliedArticle from './ImpliedArticle';
import SportsBettingArticle from './SportsBettingArticle';

export default ({ introSlug, blogSlug }) => {
  if (introSlug) {
    if (blogSlug) {
      switch (blogSlug) {
        case 'sports-betting':
          return {
            title: 'Sports Betting Explained',
            image: introImage3,
            content: <SportsBettingArticle />,
          };
        case 'using-implied':
        default:
          return {
            title: 'Using Implied Probability to Find Sports Betting Value',
            image: introImage5,
            content: <ImpliedArticle />,
          };
      }
    } else {
      switch (introSlug) {
        case 'betting101':
          return {
            title: 'Betting 101',
            image: introImage2,
            content: <Betting101Article />,
          };
        case 'advanced':
        default:
          return {
            title: 'Advanced Betting Concepts',
            image: introImage4,
            content: <AdvancedBetting />,
          };
      }
    }
  } else {
    return {
      title: 'Want to learn how to bet?',
      image: introImage1,
      content: <RootArticle />,
    };
  }
};
