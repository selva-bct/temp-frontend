
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';

import './login.scss';

export const Login = () => {

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    validationSchema: yup.object().shape({
      email: yup.string()
        .email('please enter an valid email')
        .required('Please enter a email'),
      password: yup.string().required('please enter password'),
    }),
    validateCriteriaMode: "firstErrorDetected",
    submitFocusError: true,
    nativeValidation: false,
  })
  const onSubmit = data => { console.log(data) }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='form-group'>
          <label className='form-label' htmlFor='email'>Email</label>
          <input className='form-input' type="text" id='email' name="email" placeholder="please enter your email" ref={register} />
          <span className='error'>{errors.email && <div>{errors.email.message}</div>}</span>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='password'>Password</label>
          < input className='form-input' type="password" id='password' name="password" ref={register} />
          <span className='error'>{errors.password && <div>{errors.password.message}</div>}</span>
        </div>
        <input type="submit" />
      </form >
    </div>
  )

}