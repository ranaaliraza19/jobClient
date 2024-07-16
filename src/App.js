import React, { useState, useEffect } from 'react';
import './App.css';
import JobsList from './components/JobsList';
import CreateJob from './components/CreateJob';
import { getJobs } from './api/jobsApi';

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const fetchedJobs = await getJobs();
                setJobs(fetchedJobs);
            } catch (error) {
                console.error('Failed to load jobs:', error);
            }
        };
        fetchAllJobs();
    }, []);

    const addJob = newJob => {
        setJobs(prevJobs => [...prevJobs, newJob]);
    };

    return (
        <div className="App">
            <h1>Job Management Dashboard</h1>
            <CreateJob onJobCreated={addJob} />
            <JobsList jobs={jobs} />
        </div>
    );
}

export default App;