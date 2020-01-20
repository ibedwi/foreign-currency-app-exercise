import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '../helpers/router.helper';

import HomePage from '../pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path='/'
          exact
          component={HomePage}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes