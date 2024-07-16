# Job Management Dashboard
This React application provides a user interface for managing jobs. It allows users to view a list of jobs, add new jobs, and view details for each job. The application interacts with a backend API to retrieve and send data.

Features
List Jobs: View all jobs retrieved from a backend server.
Create Jobs: Add new jobs through a form submission.
Job Details: Click on a job to view detailed information in a modal.
Technologies Used
React (Create React App)
Axios for API requests
CSS for styling
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You will need to have Node.js and npm installed on your computer. Node.js 12.x or higher is recommended.

To check if you have Node.js installed, run this command in your terminal:

Copy code
node -v
To confirm that you have npm installed you can run this command:

Copy code
npm -v
Installation
Follow these steps to get your development environment running:

Clone the repository
bash
Copy code
git clone git@github.com:ranaaliraza19/jobClient.git
cd job-management-dashboard
Install dependencies
bash
Copy code
npm install
Start the development server
bash
Copy code
npm start
This will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

Usage
After starting the app, you will see a simple user interface with:

A list of jobs displayed.
A button to add new jobs.
Each job can be clicked to view more details.
To add a job, fill out the form at the top of the page and submit it. The new job will appear in the job list if successfully created.
