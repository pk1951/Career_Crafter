import React from 'react';
import './jobs.css';

const trendingJobs = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Tech Innovators',
    applyLink: '/apply/tech-innovators-full-stack-developer',
    imageLink: 'https://tse3.mm.bing.net/th?id=OIP.zJWD3hkTbzJonv2QDz7D1wHaEP&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'Data Insights Co.',
    applyLink: '/apply/data-insights-data-scientist',
    imageLink: 'https://tse2.mm.bing.net/th?id=OIP.3Eqdiz9v3r4TNAnl8PYhugHaFD&pid=Api&P=0&h=180',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Web Wizards',
    applyLink: '/apply/web-wizards-frontend-developer',
    imageLink: 'https://tse1.mm.bing.net/th?id=OIP.qAp404m16RcIXjO7ieqLUgHaEK&pid=Api&P=0&h=180',
  },
  {
    id: 4,
    title: 'Machine Learning Engineer',
    company: 'AI Solutions Ltd.',
    applyLink: '/apply/ai-solutions-machine-learning-engineer',
    imageLink: 'https://tse3.mm.bing.net/th?id=OIP.Ba_aY45bd8p1E8x61gFm2wHaD4&pid=Api&P=0&h=180',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Cloud Innovate',
    applyLink: '/apply/cloud-innovate-devops-engineer',
    imageLink: 'https://tse1.mm.bing.net/th?id=OIP.gIde61EVOY02D6L4dXDlmAHaE7&pid=Api&P=0&h=180',
  },
  {
    id: 6,
    title: 'Mobile App Developer',
    company: 'App Creators Inc.',
    applyLink: '/apply/app-creators-mobile-app-developer',
    imageLink: 'https://novateus.com/wp-content/uploads/2021/01/Novateus-mobile-app-developer-working-on-app-scaled.jpg',
  },
  {
    id: 7,
    title: 'UX/UI Designer',
    company: 'Design Visionaries',
    applyLink: '/apply/design-visionaries-ux-ui-designer',
    // imageLink: 'https://tse3.mm.bing.net/th?id=OIP.zJWD3hkTbzJonv2QDz7D1wHaEP&pid=Api&P=0&h=180',
  },
  {
    id: 8,
    title: 'Backend Developer',
    company: 'Code Crafters',
    applyLink: '/apply/code-crafters-backend-developer',
    // imageLink: 'https://tse3.mm.bing.net/th?id=OIP.zJWD3hkTbzJonv2QDz7D1wHaEP&pid=Api&P=0&h=180',
  },
  {
    id: 9,
    title: 'Security Analyst',
    company: 'SecureTech Solutions',
    applyLink: '/apply/securetech-solutions-security-analyst',
  },
  {
    id: 10,
    title: 'Cloud Architect',
    company: 'CloudMasters',
    applyLink: '/apply/cloudmasters-cloud-architect',
  },
  {
    id: 11,
    title: 'Database Administrator',
    company: 'Data Guardians',
    applyLink: '/apply/data-guardians-database-administrator',
  },
  {
    id: 12,
    title: 'Game Developer',
    company: 'GameCraft Studios',
    applyLink: '/apply/gamecraft-studios-game-developer',
  },
  {
    id: 13,
    title: 'Network Engineer',
    company: 'Network Wizards',
    applyLink: '/apply/network-wizards-network-engineer',
  },
  {
    id: 14,
    title: 'AI Research Scientist',
    company: 'Future Minds AI',
    applyLink: '/apply/future-minds-ai-ai-research-scientist',
  },
  {
    id: 15,
    title: 'Blockchain Developer',
    company: 'CryptoTech Innovations',
    applyLink: '/apply/cryptotech-innovations-blockchain-developer',
  },
  {
    id: 16,
    title: 'IT Project Manager',
    company: 'Project Xcelerate',
    applyLink: '/apply/project-xcelerate-it-project-manager',
  },
  {
    id: 17,
    title: 'Embedded Systems Engineer',
    company: 'Embedded Solutions Ltd.',
    applyLink: '/apply/embedded-solutions-embedded-systems-engineer',
  },
  {
    id: 18,
    title: 'Data Engineer',
    company: 'Data Pioneers',
    applyLink: '/apply/data-pioneers-data-engineer',
  },
  {
    id: 19,
    title: 'AR/VR Developer',
    company: 'Virtual Realities Inc.',
    applyLink: '/apply/virtual-realities-ar-vr-developer',
  },
  {
    id: 20,
    title: 'Quality Assurance Analyst',
    company: 'QA Innovate',
    applyLink: '/apply/qa-innovate-quality-assurance-analyst',
  },
  {
    id: 21,
    title: 'System Administrator',
    company: 'System Guardians',
    applyLink: '/apply/system-guardians-system-administrator',
  },
  {
    id: 22,
    title: 'IoT Solutions Architect',
    company: 'IoT Innovations',
    applyLink: '/apply/iot-innovations-iot-solutions-architect',
  },
  {
    id: 23,
    title: 'Web Content Manager',
    company: 'ContentCraft',
    applyLink: '/apply/contentcraft-web-content-manager',
  },
  {
    id: 24,
    title: 'Software Development Manager',
    company: 'DevMaster Solutions',
    applyLink: '/apply/devmaster-solutions-software-development-manager',
  },
  {
    id: 25,
    title: 'IT Security Consultant',
    company: 'SecureNet Consulting',
    applyLink: '/apply/securenet-consulting-it-security-consultant',
  },
];

const TrendingJobsPage = () => {
    return (
      <div className="trending-jobs-body">
        <div className="trending-jobs-header">
          <h1 className="explore-jobs-para">
            <center>Trending Jobs</center>
          </h1>
        </div>
  
        <div className="trending-jobs-grid">
          {trendingJobs.map((job) => (
            <div key={job.id} className="job-item">
              <div className="job-details">
                <h3 style={{ color: 'rgb(17, 165, 165)' }}>{job.title}</h3>
                <p className="company" style={{ color: 'rgba(58, 38, 38, 0.894)' }}>
                  Company: {job.company}
                </p>
                <img src={job.imageLink} alt={`Image for ${job.title}`} style={{ maxWidth: '100%', height: 'auto' }} />
                
              </div>
            </div>
          ))}
        </div>
  
        <div className="trending-jobs-footer-info">
          <p>&copy; 2023 Your Job Portal</p>
          <p>
            <a href="#" className="trending-jobs-privacy-link">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="trending-jobs-terms-link">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default TrendingJobsPage;