import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HowToBet from './HowToBet';

export default () => {
  return (
    <Switch>
      <Route path="/how-to-bet/:introSlug?/:blogSlug?" component={HowToBet} />
      <Redirect to="/how-to-bet" />
    </Switch>
  );
};
