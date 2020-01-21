
import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// custom components
import { 
  Login,
  Signup,
  EditSignup,
  PasswordSetup,
  ChangePassword,
  ForgotPassword,
  Dashboard
} from './../container';

export const AuthRoute = () => (
  <Switch>
    <Redirect exact path='auth' to='auth/login'></Redirect>
    <Route path='/auth/login' component={Login}></Route>
    <Route exact path='/auth/signup/:token' component={Signup}></Route>
    <Route exact path='/auth/signup/edit/:token' component={EditSignup}></Route>
    <Route exact path='/auth/change-password' component={ChangePassword}></Route>
    <Route exact path='/auth/forgot-password' component={ForgotPassword}></Route>
    <Route path='/auth/signup/password/:token/:updatedToken' component={PasswordSetup}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    
    <Redirect to='/auth/login'></Redirect>
  </Switch>
);