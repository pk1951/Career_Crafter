import React from 'react';
import './companies.css'; 

const companies = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://th.bing.com/th/id/OIP.SqEICC59PL1VrdefhGEqqgHaCg?rs=1&pid=ImgDetMain',
    details: 'Google is a multinational technology company that specializes in Internet-related services and products. Googles mission is to organize the world\'s information and make it universally accessible and useful.',
    requirements: 'Bachelor\'s degree in Computer Science, experience with web technologies, strong problem-solving skills.',
    salary: 'Competitive salary and comprehensive benefits package.',
  },
  {
    id: 2,
    name: 'Apple Inc.',
    logo: 'https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202109151741',
    details: 'Apple Inc. is a global technology company known for designing, manufacturing, and marketing consumer electronics, computer software, and online services. Apple is committed to creating innovative and beautifully designed products.',
    requirements: 'Degree in a relevant field, proficiency in Swift or Objective-C, experience with iOS development.',
    salary: 'Competitive salary with stock options and health benefits.',
  },
  {
    id: 3,
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png',
    details: 'Microsoft is a global technology company that develops, licenses, and sells computer software, consumer electronics, and personal computers. Microsoft is dedicated to empowering every person and every organization on the planet to achieve more.',
    requirements: 'Bachelor\'s degree in Computer Science, experience with Microsoft technologies, strong communication skills.',
    salary: 'Competitive salary with bonuses and career development opportunities.',
  },
  {
    id: 4,
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png',
    details: 'Amazon is the world\'s largest online retailer and cloud computing company. The company is known for its commitment to customer-centricity and innovation. Amazon offers a wide range of products, services, and technologies.',
    requirements: 'Degree in a relevant field, experience in e-commerce, cloud computing skills.',
    salary: 'Competitive salary, stock options, and comprehensive benefits.',
  },
  {
    id: 5,
    name: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/512px-Tesla_Motors.svg.png',
    details: 'Tesla, Inc. is an electric vehicle and clean energy company. Tesla is dedicated to accelerating the world\'s transition to sustainable energy through electric cars, solar products, and energy storage solutions.',
    requirements: 'Degree in Engineering or related field, experience in electric vehicle technology.',
    salary: 'Competitive salary, stock options, and benefits.',
  },
  {
    id: 6,
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/512px-Facebook_f_logo_%282019%29.svg.png',
    details: 'Facebook is a social media and technology company that connects people worldwide. Facebooks mission is to give people the power to build community and bring the world closer together.',
    requirements: 'Bachelor\'s degree in Computer Science, experience with social media technologies.',
    salary: 'Competitive salary, bonuses, and comprehensive benefits.',
  },
  {
    id: 7,
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png',
    details: 'IBM (International Business Machines Corporation) is a global technology and consulting company. IBM provides a range of technology and business solutions, including artificial intelligence, cloud computing, and blockchain.',
    requirements: 'Degree in a relevant field, expertise in IBM technologies, strong problem-solving skills.',
    salary: 'Competitive salary, career development programs, and benefits.',
  },
  {
    id: 8,
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png',
    details: 'Netflix is a streaming service that offers a wide variety of TV shows, movies, documentaries, and more. Netflix is committed to providing an amazing entertainment experience to its subscribers around the globe.',
    requirements: 'Degree in a relevant field, experience in streaming technologies, creative thinking.',
    salary: 'Competitive salary, stock options, and unique employee perks.',
  },
  {
    id: 9,
    name: 'Twitter',
    logo: 'https://www.macitynet.it/wp-content/uploads/2018/05/Twitter1200.jpg',
    details: 'Twitter is a social media platform that allows users to share and discover what\'s happening in the world. Twitter is dedicated to fostering conversation and connecting people globally.',
    requirements: 'Bachelor\'s degree in Computer Science, experience with real-time communication technologies.',
    salary: 'Competitive salary, stock options, and a vibrant work environment.',
  },
  {
    id: 10,
    name: 'Adobe',
    logo: 'https://th.bing.com/th/id/OIP.gpZ_yxnhS-O3NLe1mWLe9AHaFj?rs=1&pid=ImgDetMain',
    details: 'Adobe Inc. is a multinational software company known for its creative software products. Adobe empowers individuals and businesses to create, deliver, and optimize engaging content and experiences.',
    requirements: 'Degree in a relevant field, proficiency in Adobe Creative Cloud, creative thinking.',
    salary: 'Competitive salary, creative work environment, and career development opportunities.',
  },
  {
    id: 11,
    name: 'Intel',
    logo: 'https://th.bing.com/th?id=OIP.qxyWqCnhTn-cUuIBeOPQtwHaFn&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2',
    requirements: 'Degree in Electrical Engineering or related field, expertise in semiconductor design.',
    salary: 'Competitive salary, stock options, and opportunities for technical advancement.',
  },
  {
    id: 12,
    name: 'Uber',
    logo: 'https://th.bing.com/th/id/OIP.PVqdsLU2RmQ7-XE6ZGZfjwHaDP?rs=1&pid=ImgDetMain',
    details: 'Uber Technologies, Inc. is a technology company that offers a range of services, including ride-sharing, food delivery, and logistics. Uber is committed to providing convenient and reliable transportation options.',
    requirements: 'Degree in a relevant field, experience in mobile app development, problem-solving skills.',
    salary: 'Competitive salary, bonuses, and flexible work arrangements.',
  },
  {
    id: 13,
    name: 'SpaceX',
    logo: 'https://th.bing.com/th/id/OIP.fauZlvFVE0Q6t-xNHATKuQHaEK?rs=1&pid=ImgDetMain',
    requirements: 'Degree in Aerospace Engineering or related field, experience in space systems design.',
    salary: 'Competitive salary, stock options, and the opportunity to work on cutting-edge space technologies.',
  },
  {
    id: 14,
    name: 'Oracle',
    logo: 'https://logosmarcas.net/wp-content/uploads/2020/09/Oracle-Emblema.png',
    requirements: 'Degree in a relevant field, expertise in Oracle technologies, strong analytical skills.',
    salary: 'Competitive salary, career development programs, and comprehensive benefits.',
  },
  {
    id: 15,
    name: 'Samsung',
    logo: 'https://cdn.wallpapersafari.com/85/88/qoCNXr.jpg',
    details: 'Samsung Electronics Co., Ltd. is a global technology company that produces a wide range of electronic devices and components. Samsung is known for its innovation in smartphones, TVs, and home appliances.',
    requirements: 'Degree in Electrical Engineering or related field, experience in consumer electronics.',
    salary: 'Competitive salary, employee discounts on Samsung products, and opportunities for career growth.',
  },
  {
    id: 16,
    name: 'Cisco',
    logo: 'https://th.bing.com/th/id/OIP.NRoeD_KgPSRlA98_UDzOVAHaC1?rs=1&pid=ImgDetMain',
    requirements: 'Degree in Computer Science or related field, expertise in networking technologies.',
    salary: 'Competitive salary, bonuses, and opportunities for professional development.',
  },
  {
    id: 17,
    name: 'LinkedIn',
    logo: 'https://logodownload.org/wp-content/uploads/2019/03/linkedIn-logo-0.png',
    details: 'LinkedIn is a professional networking platform that connects individuals and businesses. LinkedIn is committed to empowering professionals to achieve their career goals and build meaningful connections.',
    requirements: 'Bachelor\'s degree in a relevant field, experience in social media technologies.',
    salary: 'Competitive salary, stock options, and professional development resources.',
  },
  {
    id: 18,
    name: 'Sony',
    logo: 'https://wallpapercave.com/wp/wp2016639.jpg',
    details: 'Sony Corporation is a multinational conglomerate that produces a wide range of consumer and professional electronics, gaming, and entertainment products. Sony is known for its innovation in electronics and entertainment.',
    requirements: 'Degree in a relevant field, experience in consumer electronics, creative thinking.',
    salary: 'Competitive salary, employee discounts on Sony products, and opportunities for career advancement.',
  },
  {
    id: 19,
    name: 'HP Inc.',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-1981-2008.png',
    details: 'HP Inc. is a multinational information technology company that provides personal computing and other access devices, imaging, and printing products. HP is dedicated to creating technology that makes life better for everyone, everywhere.',
    requirements: 'Degree in Computer Science or related field, experience in hardware and software development.',
    salary: 'Competitive salary, benefits, and opportunities for professional growth.',
  },
  {
    id: 20,
    name: 'NVIDIA',
    logo: 'https://th.bing.com/th/id/OIP.UY4lUiAJzgzUbjX7t7ywbQHaB_?rs=1&pid=ImgDetMain',
    details: 'NVIDIA Corporation is a multinational technology company that designs graphics processing units (GPUs) for gaming and professional markets. NVIDIA is a leading player in the field of visual computing.',
    requirements: 'Degree in Computer Science or related field, expertise in GPU technology.',
    salary: 'Competitive salary, stock options, and opportunities to work on cutting-edge graphics technologies.',
  },

];


const CompaniesPage = () => {
    const handleApplyJob = (companyName) => {
      const message = `The Job has been Applied Successfully in ${companyName}`;
      alert(message);
    };
  return (
    <div className="companies-body">
      <div className="companies-header">
     
        <h1 className="explore-jobs-para"><center>Explore Your Jobs Here.</center></h1>
      </div> 

      <nav className="companies-nav">
        <div className='padd'></div>
      </nav>

      
      <div className="companies-grid">
        {companies.map((company) => (
          <div key={company.id} className="company-item">
            <img className="company-logo" src={company.logo} alt={company.name} />
            <div className="company-details">
              <h3>{company.name}</h3>
              <div className="toggle">
                <p className="details">{company.details}</p>
                <p className="requirements">Requirements: {company.requirements}</p>
                <p className="salary">Salary: {company.salary}</p>
                <button className='applyjob' onClick={() => handleApplyJob(company.name)}>
                  Apply Job
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="companies-footer-info">
        <p>&copy; 2023 Your Job Portal</p>
        <p>
          <a href="#" className="companies-privacy-link">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="companies-terms-link">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
};
export default CompaniesPage;
