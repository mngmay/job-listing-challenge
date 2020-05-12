import React from "react";
import JobCard from "./JobCard";
import JobData from "../data/data.json";

const JobList = () => {
  return (
    <div>
      {JobData.map(job => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
};

export default JobList;
