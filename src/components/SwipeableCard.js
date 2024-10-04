import React from "react";
import { useSwipeable } from "react-swipeable";

const SwipeableCard = ({ job, onSwipeLeft, onSwipeRight }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipeLeft(job),
    onSwipedRight: () => onSwipeRight(job),
  });

  return (
    <div {...handlers} className="swipeable-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default SwipeableCard;
