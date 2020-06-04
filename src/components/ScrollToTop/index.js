import React from 'react';
import Button from '@material-ui/core/Button';

export default () => {
  return (
    <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      ^
    </Button>
  );
};
