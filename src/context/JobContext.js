import React, { useState, createContext } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "New York" },
    { id: 2, title: "Backend Developer", company: "Code Labs", location: "San Francisco" },
    // Add more job listings here
  ]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const bookmarkJob = (job) => {
    setBookmarkedJobs((prevJobs) => [...prevJobs, job]);
  };

  const dismissJob = (job) => {
    setJobs((prevJobs) => prevJobs.filter((j) => j.id !== job.id));
  };

  return (
    <JobContext.Provider value={{ jobs, bookmarkedJobs, bookmarkJob, dismissJob }}>
      {children}
    </JobContext.Provider>
  );
};
