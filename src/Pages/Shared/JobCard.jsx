import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  // console.log(job);
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
  } = job;
  return (
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
          <Link to={`/jobs/${_id}`}>
            
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
