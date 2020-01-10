
import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// custom components
import { Login, Signup, EditSignup, PasswordSetup } from './../container'

export const AuthRoute = () => (
  <Switch>
    <Redirect exact path='auth' to='auth/login'></Redirect>
    <Route path='/auth/login' component={Login}></Route>
    <Route exact path='/auth/signup/:token' component={Signup}></Route>
    <Route exact path='/auth/signup/edit/:token' component={EditSignup}></Route>
    <Route path='/auth/signup/correct/:token' component={PasswordSetup}></Route>
    
    <Redirect to='/auth/login'></Redirect>
  </Switch>
)