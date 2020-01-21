import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { parseJwt } from '../../utils/jwt-util';
import './signup.scss';
import { REGISTER_REQUESTING } from '../../constant/auth.constant';

export const PasswordSetup = () => {
  const history = useHistory();
  const { token, updatedToken } = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => (state.auth.register));
  // checks if the user has logged in
  useEffect(() => {
    if (state.successful !== null && state.successful) {
      history.push('/login');
    }
  })

  // decoded data
  let data = {}
  let updatedTokenData = {}
  try {
    data = parseJwt(token) || {}
    updatedTokenData = parseJwt(updatedToken) || {}
  } catch (error) {
    token && alert('looks like the token is tampered')
    console.log('Error while decoding token :: ', error)
    history.push('/auth/login')
  }
  console.log('parsed Token Data :: ', data, updatedTokenData)

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      password: updatedTokenData.password,
      confirmPassword: updatedTokenData.confirmPassword,
      termsAndCondition: false,
      subscribe: true
    },
    validationSchema: yup.object().shape({
      password: yup.string().required('Please enter password'),
      confirmPassword: yup.string().required('please enter confirm Password')
                  .oneOf([yup.ref('password'), null], 'Passwords must match'),
      termsAndCondition: yup.boolean().required('please check the terms and condition'),
      subscribe: yup.boolean()
    }),
    validateCriteriaMode: 'firstErrorDetected',
    submitFocusError: true,
    nativeValidation: false,
  })
  const onSubmit = formData => {
    const reqObj = { ...formData, ...updatedTokenData }
    dispatch({ type: REGISTER_REQUESTING, data: reqObj })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className='form-group'>
          <label className='form-label' htmlFor='password'>Password</label>
          <input className='form-input' id='password' type='password' name='password' 
          placeholder='password' ref={register} />
          <span className='error'>
            {errors.password && <div>{errors.password.message}</div>}
          </span>
        </div>

        <div className='form-group'>
          <label className='form-label' htmlFor='confirmPassword'>Confirm Password</label>
          <input className='form-input' id='confirmPassword' type='password' 
          name='confirmPassword' placeholder='confirm password' ref={register} />
          <span className='error'>
            {errors.confirmPassword && <div> {errors.confirmPassword.message} </div>}
          </span>
        </div>

        <div className='form-group'>
          <label>
          <input className='form-input' id='termsAndCondition' type='checkbox' 
          name='termsAndCondition'  ref={register} />
            <span>I have read the Terms & Conditions. In checking this, I consent 
              to use the Genomic Health Exchange.</span>
          </label>
          <span className='error'>
            {errors.termsAndCondition && <div> {errors.termsAndCondition.message}</div>}
          </span>
        </div>

        <div className='form-group'>
          <label>
          <input className='form-input' id='subscribe' type='checkbox' name='subscribe' 
          ref={register} />
            <span>I  want to be notified of opportunities to participate in future 
              research (you can change your mind at any time.</span>
          </label>
          <span className='error'>
            {errors.subscribe && <div>{errors.subscribe.message}</div>}
          </span>
        </div>

        <input type='submit' className='correct' value='Create Account' />
        <input type='reset'className='correct' value='Reset'/>
      </form >
    </div>
  )
}