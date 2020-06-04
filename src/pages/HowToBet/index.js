import React from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const { introSlug, blogSlug } = useParams();

  return <div>How to bet</div>;
};
