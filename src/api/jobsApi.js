import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3000";

const handleApiError = (error) => {
    const message = error?.response?.data?.message || "An unexpected error occurred";
    alert(message);
    console.error("API Error:", message);
    throw error;
};

// API function to get all jobs
export const getJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/jobs`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// API function to create a job
export const createJob = async (creatJobPayload) => {
    try {
        const payload = { name: creatJobPayload.name, status: creatJobPayload.status };
        const response = await axios.post(`${API_URL}/api/jobs`, payload);
        console.log("Job created with status:", response.status);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// API function to get job detail
export const getJobDetail = async (jobId) => {
    try {
        const response = await axios.get(`${API_URL}/api/jobs/${jobId}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};
