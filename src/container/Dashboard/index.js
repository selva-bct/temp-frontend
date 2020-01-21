import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
export const Dashboard = () => {
  const history = useHistory()
  useEffect(() => {
    history.push('/auth/signup/fdb')
  });
  
  return (
    <div>Dashboard</div>
  )
}
