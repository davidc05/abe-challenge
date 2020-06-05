import React, { useRef } from 'react';
import _ from 'lodash';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import TopDealRow from './TopDealRow';
import list from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sliderButton: {
    width: 22,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#F9FAFA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
  },
  chunkItem: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  sliderWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%',
  },
}));

const SliderButton = ({ left, direction, ...rest }) => {
  const classes = useStyles();

  return (
    <Button className={classes.sliderButton} p={0} {...rest}>
      {left ? (
        <ChevronLeftIcon color="primary" />
      ) : (
        <ChevronRightIcon color="primary" />
      )}
    </Button>
  );
};

const SliderColumn = ({ chunk, region }) => {
  const classes = useStyles();

  return (
    <Box className={classes.flex}>
      {chunk.map((item, ind) => (
        <Box className={classes.chunkItem} key={ind}>
          <TopDealRow key={`card-${ind}`} {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default ({ ...rest }) => {
  const classes = useStyles();
  const sliderRef = useRef();

  const numSlides = 1;
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: numSlides,
    slidesToScroll: numSlides,
  };
  const listToShow = _.chunk(list, 2);
  const showArrows = listToShow.length > 1;

  return (
    <Box className={classes.root} {...rest}>
      {showArrows && (
        <SliderButton left onClick={() => sliderRef.current.slickPrev()} />
      )}
      <Slider
        className={classes.sliderWrapper}
        {...sliderSettings}
        ref={sliderRef}
      >
        {listToShow.map((chunk, ind) => (
          <SliderColumn chunk={chunk} key={ind} />
        ))}
      </Slider>
      {showArrows && (
        <SliderButton onClick={() => sliderRef.current.slickNext()} />
      )}
    </Box>
  );
};
