// CreateJobModal.js Component
import React, { useState } from 'react';
import { createJob, getJobDetail } from '../api/jobsApi';

const CreateJob = ({ onJobCreated }) => {
    const [jobName, setJobName] = useState('');
    const [status, setStatus] = useState('completed');

    const handleCreateJob = async () => {
        if (!jobName) {
            alert('Please enter a job name.');
            return;
        }
        try {
            const data = await createJob({ name: jobName, status });
            alert(`Job created with ID: ${data.jobId}`);
            const newJobDetails = await getJobDetail(data.jobId);
            onJobCreated(newJobDetails);

            // Resetting the input fields after successful creation
            setJobName('');
            setStatus('completed');
        } catch (error) {
            console.error('Failed to create job:', error);
            alert('Failed to create job. Please try again.');
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="jobName">Job Name: </label>
                <input
                    type="text"
                    id="jobName"
                    value={jobName}
                    onChange={(e) => setJobName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="status">Status: </label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button onClick={handleCreateJob}>Create Job</button>
        </div>
    );
};

export default CreateJob;
