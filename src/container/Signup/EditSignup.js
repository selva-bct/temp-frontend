import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { setItem } from './../../utils/storage';
import { parseJwt } from '../../utils/jwt-util';
import './signup.scss';


export const EditSignup = () => {
  const history = useHistory();
  const { token } = useParams();
  const dispatch = useDispatch();
  // decoded data
  let data = {}
  try {
    data = parseJwt(token) || {}
  } catch (error) {
    token && alert("loks like the token is tampered")
    console.log("Error while decoding token :: ", error)
    history.push('/auth/login')
  }
  console.log('parsed Token Data :: ', data)

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      email: data.email
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required('Please enter first name'),
      lastName: yup.string().required('please enter last name'),
      city: yup.string().required('please enter city'),
      state: yup.string().required('please enter state'),
      pincode: yup.string().required('please enter pincode'),
      email: yup.string()
        .email('please enter an valid email')
        .required('email is required'),
    }),
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  })
  const onSubmit = data => {
    // dispatch({ type: 'USER_INFO_EDIT', data })
    data.name = data.email
    setItem('updatedUser', data)
    const path = '/auth/signup/password'
    history.push(`${path}/${token}/${token}`)
   }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='form-group'>
          <label className='form-label' htmlFor="firstName">Name</label>
          <input className='form-input' id="firstName" type="text" name="firstName" placeholder="please enter your first name" ref={register} />
          <span className='error'>
            {errors.firstName && <div>{errors.firstName.message}</div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="lastName">Last Name</label>
          <input className='form-input' id="lastName" type="text" name="lastName" placeholder="please enter your last name" ref={register} />
          <span className='error'>
            {errors.lastName && <div> {errors.lastName.message} </div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="email">Email</label>
          <input className='form-input' disabled id="email" type="text" name="email" placeholder="please enter your email" ref={register} />
          <span className='error'>
            {errors.email && <div> {errors.email.message}</div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="city">City</label>
          <input className='form-input' id="city" type="text" name="city" placeholder="please enter your city" ref={register} />
          <span className='error'>
            {errors.city && <div>{errors.city.message}</div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="state">state</label>
          <input className='form-input' id="state" type="text" name="state" placeholder="please enter your state" ref={register} />
          <span className='error'>
            {errors.state && <div>{errors.state.message}</div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="pincode">pincode</label>
          <input className='form-input' id="pincode" type="text" name="pincode" placeholder="please enter your pincode" ref={register} />
          <span className='error'>
            {errors.pincode && <div>{errors.pincode.message}</div>}
          </span>
        </div>

        <button className='correct' >Everything is correct</button>
      </form >
    </div>
  )
}