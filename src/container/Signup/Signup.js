import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";

import { parseJwt } from './../../utils/jwt-util';
import './signup.scss';

export const Signup = () => {
  const history = useHistory();
  // const { token } = useParams();
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVHlwZSI6IlBhdGllbnQiLCJmaXJzdE5hbWUiOiJQYXRpZW5jZSIsImxhc3ROYW1lIjoiUGVhcnNvbiIsImVtYWlsIjoicGF0aWVuY2UucGVhcnNvbkBjb21wYW55LmNvbSIsImFkZHJlc3MxIjoiMTIzIEZyYW5jaXNjYW4gQmx2ZCIsImFkZHJlc3MyIjoiIiwiY2l0eSI6IlNhbiBGcmFuY2lzY28iLCJzdGF0ZSI6IkNBIiwicGluY29kZSI6Ijk0MDAxIiwianRpIjoiYjk2NTI4YjMtNTNkZi00ZjM3LWFiOGYtZDVkMzJiNGUzYmY5IiwiaWF0IjoxNTc4NjcxNDA4LCJleHAiOjE1Nzg2NzUwMDh9.Q7rEsJ6b-qYY1jghoiHhYULAUxTfOwmBTSJ1R2DE5hM'
  // decoded data
  const data = parseJwt(token) // handle error with try catch

  function goTo(path) {
    history.push(`${path}/${token}`)
  }
  
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <button className='correct' onClick={() => goTo('/auth/signup/edit')}>Incorrect information or not you?</button>
      <br />
      <button className='correct' onClick={() => goTo('/auth/signup/password')}>Everything is correct</button>
    </div>
  )
}