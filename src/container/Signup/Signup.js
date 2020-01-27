import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setItem } from './../../utils/storage';
import { parseJwt } from './../../utils/jwt-util';

import './signup.scss';
import { axios } from './../../config/api-client';
import { fetchUserByToken } from './../../actions/user';
export const Signup = () => {
  const history = useHistory();
  let { token } = useParams();
  const dispatch = useDispatch();
  const [ userData, setUserData ] = useState()
  useEffect(()=> {
    // dispatch(fetchUserByToken(token))
    async function getUser() {
      try {
        const { data: { data } } = await axios.get(`/users/token/${token}`)
        setUserData(data)
        console.log("data within method :: ", data)
      } catch (error) {
        console.log('error while fetching user', error)

      }
    }
    getUser()
  })
  
  function goTo(path) {
    path = `${path}/${token}`
    // setItem('updatedUser', data)
    if (path.indexOf('/password') > -1) {
      path = `${path}/${token}`
    }
    history.push(path)
  }
  
  return (
    <div>
      <pre>
        {JSON.stringify(userData, null, 2)}
      </pre>
      <button className='not-correct' onClick={() => goTo('/auth/signup/edit')}>Incorrect information or not you?</button>
      <br />
      <button className='correct' onClick={() => goTo('/auth/signup/password')}>Everything is correct</button>
    </div>
  )
}