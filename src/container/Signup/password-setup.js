import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import * as yup from 'yup';

import { parseJwt } from '../../utils/jwt-util';
import './signup.scss';

export const PasswordSetup = () => {
  const history = useHistory();
  const { token, updatedToken } = useParams();

  // decoded data
  let data = {}
  try {
    data = parseJwt(token) || {}
  } catch (error) {
    token && alert("looks like the token is tampered")
    console.log("Error while decoding token :: ", error)
  }
  console.log('parsed Token Data :: ', data)

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      password: data.password,
      confirmPassword: data.confirmPassword,
      termAndCondition: true,
      subscribe: false
    },
    validationSchema: yup.object().shape({
      password: yup.string().required('Please enter password'),
      confirmPassword: yup.string().required('please enter confirm Password')
                  .oneOf([yup.ref('password'), null], 'Passwords must match'),
      termsAndCondition: yup.boolean().required('please check the terms and condition'),
      subscribe: yup.boolean()
    }),
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  })
  console.log('error :: ', errors)
  const onSubmit = data => { 
    console.log(data);
    alert('Not yet implemented') }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className='form-group'>
          <label className='form-label' htmlFor="password">Password</label>
          <input className='form-input' id="password" type="password" name="password" placeholder="password" ref={register} />
          <span className='error'>
            {errors.password && <div>{errors.password.message}</div>}
          </span>
        </div>

        <div className='form-group'>
          <label className='form-label' htmlFor="confirmPassword">Confirm Password</label>
          <input className='form-input' id="confirmPassword" type="password" name="confirmPassword" placeholder="confirm password" ref={register} />
          <span className='error'>
            {errors.confirmPassword && <div> {errors.confirmPassword.message} </div>}
          </span>
        </div>

        <div className='form-group'>
          <label>
          <input className='form-input' id="termsAndCondition" type="checkbox" name="termsAndCondition"  ref={register} />
            <span>I have read the Terms & Conditions. In checking this, I consent to use the Genomic Health Exchange.</span>
          </label>
          <span className='error'>
            {errors.termsAndCondition && <div> {errors.termsAndCondition.message}</div>}
          </span>
        </div>

        <div className='form-group'>
          <label>
          <input className='form-input' id="subscribe" type="checkbox" name="subscribe" ref={register} />
            <span>I  want to be notified of opportunities to participate in future research (you can change your mind at any time.</span>
          </label>
          <span className='error'>
            {errors.subscribe && <div>{errors.subscribe.message}</div>}
          </span>
        </div>

        <input type='submit'className='correct'value='Create Account'/>
      </form >
    </div>
  )
}