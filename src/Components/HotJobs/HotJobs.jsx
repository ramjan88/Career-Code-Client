import React, { use } from 'react';
import JobCard from '../../Pages/Shared/JobCard';

const HotJobs = ({ jobsPromise }) => {
  const jobs=use(jobsPromise)
  console.log(jobs);
  return (
    <div className='mt-30'>
      <h1 className="text-4xl text-center font-bold">Hot Jobs Of Years</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-2 lg:px-0">
        {
          jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;