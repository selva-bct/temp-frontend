import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { get } from 'lodash';

import { setItem, getItem } from './../../utils/storage'
import { axios } from '../../config/api-client'
import './signup.scss';


export const EditSignup = () => {
  const history = useHistory();
  const { token } = useParams();
  // try fetching data through api
  // this is a temp work around saving data into localstorage
  const userData = getItem('updatedUser')
  if (!userData) {
    history.push('/auth/login')
  }
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: get(userData, 'firstName', ''),
      lastName: get(userData, 'lastName', ''),
      addressLine1: get(userData, 'Addresses[0].addressLine1',  ''),
      addressLine2: get(userData, 'Addresses[0].addressLine2',  ''),
      addressLine3: get(userData, 'Addresses[0].addressLine3',  ''),
      city: get(userData, 'Addresses[0].city', ''),
      state: get(userData, 'Addresses[0].state', ''),
      zipCode: get(userData, 'Addresses[0].zip code', ''),
      email: get(userData, 'email', '')
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required('Please enter first name'),
      lastName: yup.string().required('please enter last name'),
      addressLine1: yup.string().required('please enter address line 1'),
      addressLine2: yup.string().required('please enter address line 2'),
      addressLine3: yup.string().required('please enter address line 3'),
      city: yup.string().required('please enter city'),
      state: yup.string().required('please enter state'),
      zipCode: yup.string().required('please enter zip code'),
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
   console.log('rendr')
  return (
    <div className='container-center'>
      <pre>
        {JSON.stringify(userData, null, 2)}
      </pre>
      
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
          <label className='form-label' htmlFor="addressLine1">address Line 1</label>
          <input className='form-input' id="addressLine1" type="text" name="addressLine1" placeholder="please enter your address" ref={register} />
          <span className='error'>
            {errors.addressLine1 && <div> {errors.addressLine1.message} </div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="addressLine2">address Line 2</label>
          <input className='form-input' id="addressLine2" type="text" name="addressLine2" placeholder="please enter your address" ref={register} />
          <span className='error'>
            {errors.addressLine2 && <div> {errors.addressLine2.message} </div>}
          </span>
        </div>
        
        <div className='form-group'>
          <label className='form-label' htmlFor="addressLine3">address Line 3</label>
          <input className='form-input' id="addressLine3" type="text" name="addressLine3" placeholder="please enter your address" ref={register} />
          <span className='error'>
            {errors.addressLine3 && <div> {errors.addressLine3.message} </div>}
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
          <label className='form-label' htmlFor="zipCode">zip code</label>
          <input className='form-input' id="zipCode" type="text" name="zipCode" placeholder="please enter your zipCode" ref={register} />
          <span className='error'>
            {errors.zipCode && <div>{errors.zipCode.message}</div>}
          </span>
        </div>

        <button className='correct' >Everything is correct</button>
      </form >
    </div>
  )
}