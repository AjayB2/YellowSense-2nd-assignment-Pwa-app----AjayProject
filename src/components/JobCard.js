// src/components/JobCard.js
import React from 'react';
import './JobCard.css'; // Optional: Add specific styles for the JobCard component

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <p className="job-company">{job.company}</p>
      <p className="job-location">{job.location}</p>
    </div>
  );
};

export default JobCard;
