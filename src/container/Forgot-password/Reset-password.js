import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import './Reset-password.scss';
import { RESET_PASSWORD_REQUESTING } from '../../constant/auth.constant';

export const ResetPassword = () => {

  const dispatch = useDispatch();
  const { email } = useParams();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    validationSchema: yup.object().shape({
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
    data.email = email
    dispatch({ type: RESET_PASSWORD_REQUESTING, data });
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} >
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
          <input className='form-input' id="confirmPassword" type="password"
            name="confirmPassword" placeholder="confirm password" ref={register} />
          <span className='error'>
            {errors.confirmPassword && <div> {errors.confirmPassword.message} </div>}
          </span>
        </div>

        <div className='form-group'>
          <label className='form-label' htmlFor="confirmationCode">Confirmation code</label>
          <input className='form-input' id="confirmationCode" type="text"
            name="confirmationCode" placeholder="confirmation code" ref={register} />
          <span className='error'>
            {errors.confirmationCode && <div> {errors.confirmationCode.message} </div>}
          </span>
        </div>

        {!email &&
          <div className='form-group'>
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' disabled id="email" type="text" name="email" placeholder="please enter your email" ref={register} />
            <span className='error'>
              {errors.email && <div> {errors.email.message}</div>}
            </span>
          </div>

        }

        <input type='submit' className='correct' />
        <input type='reset' className='correct' value='Reset' />
      </form >
    </div>
  )

}