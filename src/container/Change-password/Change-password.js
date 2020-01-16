import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import './Change-password.scss';
import { CHANGE_PASSWORD_REQUESTING } from './../../constant/auth.constant';

export const ChangePassword = () => {

  const dispatch = useDispatch()

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    validationSchema: yup.object().shape({
      oldPassword: yup.string().required('Please enter old password'),
      password: yup.string().required('Please enter password'),
      confirmPassword: yup.string().required('please enter confirm Password')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    }),
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  })

  const onSubmit = data => {
    // read this from constant
    dispatch({ type: CHANGE_PASSWORD_REQUESTING, data });
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className='form-group'>
          <label className='form-label' htmlFor="password">Old Password</label>
          <input className='form-input' id="oldPassword" type="password" name="oldPassword"
          placeholder="oldPassword" ref={register} />
          <span className='error'>
            {errors.oldPassword && <div>{errors.oldPassword.message}</div>}
          </span>
        </div>

        <div className='form-group'>
          <label className='form-label' htmlFor="password">Password</label>
          <input className='form-input' id="password" type="password" name="password"
          placeholder="password" ref={register} />
          <span className='error'>
            {errors.password && <div>{errors.password.message}</div>}
          </span>
        </div>

        <div className='form-group'>
          <label className='form-label' htmlFor="confirmPassword">Confirm Password</label>
          <input className='form-input' id="confirmPassword" type="password" name="confirmPassword"
          placeholder="confirm password" ref={register} />
          <span className='error'>
            {errors.confirmPassword && <div> {errors.confirmPassword.message} </div>}
          </span>
        </div>

        <input type='submit' className='correct' />
        <input type='reset' className='correct' value='Reset' />
      </form >
    </div>
  )

}