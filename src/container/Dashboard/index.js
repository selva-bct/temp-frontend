import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import * as yup from 'yup';

export const Dashboard = () => {

  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      providerType: '',
      city: '',
      state: '',
      pincode: '',
      email: ''
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required('Please enter first name'),
      lastName: yup.string().required('please enter last name'),
      addressLine1: yup.string().required('please enter address line 1'),
      addressLine2: yup.string().required('please enter address line 2'),
      providerType: yup.string().required('please enter user role'),
      city: yup.string().required('please enter city'),
      state: yup.string().required('please enter state'),
      pincode: yup.string().required('please enter pincode'),
      email: yup.string()
        .email('please enter an valid email')
        .required('please enter last name'),
    }),
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  });

  const onSubmit = data => {
    dispatch({ type: 'INVITE_USER', data });
  }

  return (
    <div className='container-center'>
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
          <label className='form-label' htmlFor="addressLine1">address Line 1</label>
          <input className='form-input' id="addressLine1" type="text" name="addressLine1" placeholder="please enter your address" ref={register} />
          <span className='error'>
            {errors.addressLine1 && <div> {errors.addressLine1.message} </div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="addressLine2">address Line 2</label>
          <input className='form-input' id="addressLine2" type="text" name="addressLine2" placeholder="please enter your addreee" ref={register} />
          <span className='error'>
            {errors.addressLine2 && <div> {errors.addressLine2.message} </div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="email">Email</label>
          <input className='form-input' id="email" type="text" name="email" placeholder="please enter your email" ref={register} />
          <span className='error'>
            {errors.email && <div> {errors.email.message}</div>}
          </span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="email">Role</label>
          <select name="providerType" ref={register}>
            <option value="patient">patient</option>
            <option value="provider">provider</option>
          </select>
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

        <button className='correct' >Invite</button>
      </form >
    </div>
  )
}