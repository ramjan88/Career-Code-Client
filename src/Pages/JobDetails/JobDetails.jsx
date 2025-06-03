import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {


  const {
    company_logo,
    title,
    description,
    company,
    location,
    requirements,
    applicationDeadline,
    salaryRange,
    _id
  } = useLoaderData();
  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <div className="card bg-base-100 shadow-sm">
        <div className="flex items-center gap-5 p-5">
          <figure>
            <img className="w-24 h-24" src={company_logo} alt="jobs" />
          </figure>
          <div className="">
            <h2 className="text-3xl">{company}</h2>
            <p>{location}</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div>
            {requirements.map((skill, index) => (
              <div key={index} className="badge m-1 badge-outline">
                {skill}
              </div>
            ))}
          </div>
          <p>
            Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </p>
          <p>Dateline: {applicationDeadline}</p>
          <div className="card-actions justify-end">
            <Link to={`/jobapply/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;