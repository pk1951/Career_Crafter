# Career Crafter

Career Crafter is a comprehensive job search and career management platform built with React.js and Node.js. It helps users find job opportunities, manage their professional profiles, and connect with companies.

## Features

- **User Authentication**: Secure signup and login functionality
- **Job Listings**: Browse and search for job opportunities
- **Company Profiles**: View information about potential employers
- **User Dashboard**: Manage your professional profile and job applications
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- HTML/CSS for styling
- React Bootstrap for UI components

### Backend
- Node.js
- Express.js for API routing
- MongoDB for database
- Mongoose for database modeling
- bcrypt for password hashing

## Project Structure

```
Career_Crafter/
├── my-app/                  # Frontend React application
│   ├── public/              # Public assets
│   └── src/                 # React source code
│       ├── backend/         # Backend code for the React app
│       ├── components/      # Reusable React components
│       ├── homescreen/      # Home screen components
│       ├── loginpage/       # Login page components
│       ├── signup/          # Signup page components
│       ├── dashboard/       # User dashboard components
│       ├── jobs/            # Job listing components
│       ├── companies/       # Company listing components
│       └── images/          # Image assets
├── server/                  # Main backend server
│   ├── index.js             # Server entry point
│   └── package.json         # Server dependencies
└── node_modules/            # Node.js dependencies
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
   ```
   git clone https://github.com/pk1951/Career_Crafter.git
   cd Career_Crafter
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../my-app
   npm install
   ```

4. Start MongoDB:
   ```
   mongod
   ```

5. Start the backend server:
   ```
   cd ../server
   npm run test
   ```

6. Start the frontend development server:
   ```
   cd ../my-app
   npm start
   ```

7. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Register a new account or login with existing credentials
2. Browse job listings and company profiles
3. Create and manage your professional profile
4. Apply for jobs and track your applications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Contact

- GitHub: [pk1951](https://github.com/pk1951)
