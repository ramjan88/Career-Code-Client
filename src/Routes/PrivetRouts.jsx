import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivetRouts = ({children}) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if(!user){
   return <Navigate to="/signin"></Navigate>;
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivetRouts;