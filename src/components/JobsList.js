// JobsList.js Component
import React, { useState } from "react";
import { getJobDetail } from "../api/jobsApi";
import JobDetailModal from "./JobDetailModal";
import "./JobsList.css";

const JobsList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = async (jobId) => {
    try {
      const jobDetails = await getJobDetail(jobId);
      setSelectedJob(jobDetails);
    } catch (error) {
      console.error("Failed to fetch job details:", error);
    }
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="container">
      <div className="table-container">
        <h2>Jobs List</h2>
        <table>
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Job Name</th>
              <th>Status/Image</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td onClick={() => handleJobClick(job._id)} style={{ cursor: "pointer" }}>
                  {job._id}
                </td>
                <td>{job.name}</td>
                <td>
                  {job.status === "completed" && job.result ? (
                    <img src={job.result} alt="Job Completed" width="100" />
                  ) : (
                    job.status
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <JobDetailModal job={selectedJob} onClose={closeModal} />
    </div>
  );
};

export default JobsList;

