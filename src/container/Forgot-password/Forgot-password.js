import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import './Reset-password.scss';
import { FORGOT_PASSWORD_REQUESTING } from '../../constant/auth';

export const ForgotPassword = () => {

  const dispatch = useDispatch()

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
        <input type='submit' className='correct' />
      </form >
    </div>
  )

}