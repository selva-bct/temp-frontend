/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AuthRoute } from './auth-route';

export const router = () => (
  <Router>
    <Switch>
      {AuthRoute()}
    </Switch>
  </Router>
)

