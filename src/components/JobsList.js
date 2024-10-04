// src/components/JobsList.js
import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import JobCard from './JobCard';

const JobsList = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div className="jobs-list">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};

export default JobsList;
