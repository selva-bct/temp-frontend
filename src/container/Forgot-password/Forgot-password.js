import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { get } from 'lodash';
import './Reset-password.scss';
import { FORGOT_PASSWORD_REQUESTING } from '../../constant/auth';

export const ForgotPassword = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => (state.auth.forgotPassword));
  
  useEffect(() => {
    // need to change the below code
    if (state.successful !== null && state.successful) {
      dispatch({ type: 'AUTH_INITIALIZE' })
    }
  });

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    validationSchema: yup.object().shape({
      email: yup.string()
        .email('please enter an valid email')
        .required('email is required'),
    }),
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  })    

  function onSubmit(data) {
    dispatch({ type: FORGOT_PASSWORD_REQUESTING, data });
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-group'>
          <label className='form-label' htmlFor="email">Email</label>
          <input className='form-input' id="email" type="email" name="email"
           placeholder="email" ref={register} />
          <span className='error'>
            {errors.email && <div>{errors.email.message}</div>}
          </span>
        </div>
        {/* Error display block */}
        {
          state.successful === false &&
          <div className='error'>
            { get(state,'errors[0].body') }
          </div>
        }
        <input type='submit' className='correct' />
      </form >
    </div>
  )

}