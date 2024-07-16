// JobDetailModal.js Component
import React from 'react';
import './JobDetailModel.css';

const JobDetailModal = ({ job, onClose }) => {
    if (!job) return null;

    // Format the createdAt date to a more readable form
    const formattedDate = new Date(job.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Determine the status or result display based on job status and availability of an result
    const statusContent = job.status === 'completed' && job.result ? (
        <img src={job.result} alt="Job Complete" style={{ width: '100%', maxWidth: '300px' }} />
    ) : (
        <p><b>Status:</b> {job.status}</p>
    );

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Job Detail</h2>
                <p><b>Job ID:</b> {job._id}</p>
                <p><b>Job Name:</b> {job?.name}</p>
                <p><b>Created At:</b> {formattedDate}</p>
                {statusContent}
            </div>
        </div>
    );
};

export default JobDetailModal;
