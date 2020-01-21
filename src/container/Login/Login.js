import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';

import './Login.scss';
import { LOGIN_REQUESTING } from './../../constant/auth.constant';
export const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector(state => (state.auth.login));
  
  // checks if the user has logged in
  useEffect(() => {
    if (state.successful !== null && state.successful) {
      console.log('-=-=-=-=-==- login -=-==-=')
      dispatch({ type: 'AUTH_INITIALIZE'})
      history.push('/dashboard');
    }
  });
  
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    validationSchema: yup.object().shape({
      username: yup.string('please enter an valid username')
        .required('Please enter a username'),
      password: yup.string().required('please enter password'),
    }),
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  })
  
  const onSubmit = data => {
    // read this from constant
    dispatch({ type: LOGIN_REQUESTING, data });
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='form-group'>
          <label className='form-label' htmlFor='email'>Username</label>
          <input className='form-input' type="text" id='username' name="username" 
          placeholder="please enter your username" ref={register} />
          <span className='error'>{errors.username && 
          <div>{errors.username.message}</div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='password'>Password</label>
          < input className='form-input' type="password" id='password' 
            placeholder="please enter password" name="password" ref={register} />
          <span className='error'>{errors.password && <div>{errors.password.message}</div>}
          </span>
        </div>
        <input type='submit' className='correct'/>
      </form >
    </div>
  )

}