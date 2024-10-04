import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";

const BookmarkedJobs = () => {
  const { bookmarkedJobs } = useContext(JobContext);

  return (
    <div className="bookmarked-jobs">
      <h2>Bookmarked Jobs</h2>
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))
      ) : (
        <p>No jobs bookmarked yet.</p>
      )}
    </div>
  );
};

export default BookmarkedJobs;
