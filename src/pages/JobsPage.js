import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";
import SwipeableCard from "../components/SwipeableCard";

const JobsPage = () => {
  const { jobs, bookmarkJob, dismissJob } = useContext(JobContext);

  return (
    <div className="jobs-page">
      {jobs.map((job) => (
        <SwipeableCard
          key={job.id}
          job={job}
          onSwipeLeft={dismissJob}
          onSwipeRight={bookmarkJob}
        />
      ))}
    </div>
  );
};

export default JobsPage;
