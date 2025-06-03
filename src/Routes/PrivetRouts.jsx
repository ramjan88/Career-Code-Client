import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouts = ({children}) => {
  const { user, loading } = use(AuthContext);
  const location=useLocation()
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if(!user){
   return <Navigate state={location.pathname} to="/signin"></Navigate>;
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivetRouts;