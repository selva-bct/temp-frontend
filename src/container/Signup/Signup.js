import React from 'react';
import { useHistory, useParams } from "react-router-dom";

import { setItem } from './../../utils/storage';
import { parseJwt } from './../../utils/jwt-util';
import './signup.scss';

export const Signup = () => {
  const history = useHistory();
  let { token } = useParams();
  if (!token || token.length < 30) {
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IlBhdGllbnQiLCJmaXJzdE5hbWUiOiJQYXRpZW5jZSIsImxhc3ROYW1lIjoiUGVhcnNvbiIsIm5hbWUiOiJQYXRpZW5jZV9QZWFyc29uIiwiZW1haWwiOiJwYXRpZW5jZS5wZWFyc29uQGNvbXBhbnkuY29tIiwiYWRkcmVzczEiOiIxMjMgRnJhbmNpc2NhbiBCbHZkIiwiYWRkcmVzczIiOiIiLCJjaXR5IjoiU2FuIEZyYW5jaXNjbyIsInN0YXRlIjoiQ0EiLCJwaW5jb2RlIjoiOTQwMDEiLCJqdGkiOiJiOTY1MjhiMy01M2RmLTRmMzctYWI4Zi1kNWQzMmI0ZTNiZjkiLCJpYXQiOjE1Nzg2NzE0MDgsImV4cCI6MTU3ODY3NTAwOH0.Jhb_AnLOzqMjF_FugwspsOi9tRKAsfLTHnrVb9KHeX4'
  }
  // decoded data
  const data = parseJwt(token) // handle error with try catch

  function goTo(path) {
    path = `${path}/${token}`
    setItem('updatedUser', data)
    if (path.indexOf('/password') > -1) {
      path = `${path}/${token}`
    }
    history.push(path)
  }
  
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <button className='not-correct' onClick={() => goTo('/auth/signup/edit')}>Incorrect information or not you?</button>
      <br />
      <button className='correct' onClick={() => goTo('/auth/signup/password')}>Everything is correct</button>
    </div>
  )
}