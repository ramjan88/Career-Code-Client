import React from 'react';
import { useParams } from 'react-router';

const JobApply = () => {
  const {id: jobId}=useParams()
  console.log(jobId);
  return (
    <div className='max-w-screen-lg mx-auto my-10'>
      <h1>Job Apply</h1>
    </div>
  );
};

export default JobApply;