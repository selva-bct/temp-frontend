import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import { Link } from 'react-router-dom'


import './Login.scss';
import { LOGIN_REQUESTING } from './../../constant/auth.constant';
import { getItem } from './../../utils/storage';
export const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector(state => (state.auth.login));
  const token = getItem('geptoken')
  
  // checks if the user has logged in
  useEffect(() => {
    // need to change the below code
    if (token || (state.successful !== null && state.successful)) {
      dispatch({ type: 'AUTH_INITIALIZE'})
      history.push('/dashboard');
    }
  });
  
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    validationSchema: yup.object().shape({
      username: yup.string('please enter an your email id')
                   .email('please enter an valid email')
                   .required('email is required'),
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
        <div>{state.status === 401 && 'Username or password not correct'} </div>
        <div>{state.status && state.status !== 401 && 'Oops something went wrong'} </div>
        <input type='submit' className='correct'/>
      </form >
      <Link to='/auth/forgot-password'>Forgot password</Link>
    </div>
  )

}