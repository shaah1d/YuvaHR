import React from 'react'
import './Third.css';

function Third() {
  return (
    <div className="box3">
      <h1 style={{ textAlign: 'center' }}>What We Do</h1>
      <div className="con">
        <div className='img-con'>
          <img src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?t=st=1720889686~exp=1720893286~hmac=4892adfe5cc5bf34f29116c7b4fb58bbd491bc91db8bfb5149b810b705884eba&w=740" alt="For Job Seekers" />
        </div>
        <div>
          <h2>For Job Seekers</h2>
          <p>We specialize in matching talented IT and manifacturing professionals with opportunities that align with their skills, experience, and career aspirations. Whether you're just starting your career or looking to take the next big step, YuvaHR is here to guide you. Our extensive network and industry expertise enable us to offer a wide range of positions in sectors such as software development, cybersecurity, project management, IT support, and more.</p>
        </div>
      </div>
      <div className="con">
        <div>
          <h2>For Employers</h2>
          <p>YuvaHR understands the critical role that skilled professionals play in driving business success. We work closely with companies to understand their unique needs and culture, ensuring that we provide candidates who are not only highly qualified but also a great fit for the team. From startups to established enterprises, we have the resources and expertise to help you build a strong, innovative workforce.</p>
        </div>
        <div className="img-con">
          <img src="/employer.png" alt="For Employers" />
        </div>
      </div>
    </div>
  )
}

export default Third
