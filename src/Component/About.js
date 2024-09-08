import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Profile from './Images/MyProfile.jpg';
import { FaEye } from 'react-icons/fa';

export const About = () => {
  return (
    <>
      <Container fluid id='about'>
        <Row className='text-center'>
          <h1>Personal Details</h1>
        </Row>
        <Row className='m-1 p-2 mt-5'>
          <Col xs={12} md={6} className='d-flex flex-column justify-content-center'>
            <p>
              A dedicated and motivated Full Stack Developer, I hold a degree from KSR College of Engineering.
              Additionally, I have successfully completed a comprehensive Full Stack Developer course at Guvi, earning certification.
              Eager to apply my expertise in front-end and back-end technologies, I am driven by a passion for creating seamless and efficient web applications.
            </p>
            <h1 className='blue-text'>Work Experience</h1>
            <h3 className='red-text'>Backend Developer Intern</h3>
            <p><b>DJ Computing, Coimbatore</b></p>
            <p><b>May 2024 - August 2024</b></p>
            <ul>
              <li>Developed APIs for basic CRUD operations utilizing MongoDB with aggregation techniques.</li>
              <li>Gained hands-on experience with Azure and AWS cloud services.</li>
              <li className='text-left'>Contributed to two projects:</li>
              <ol>
                <li>SmartComm Circuit App: Leveraged Azure for data access.</li>
                <li>SNQS Clothing App: Utilized AWS and serverless functions to enhance application performance.</li>
              </ol>
            </ul>

            <h3 className='red-text'>Full-Time Software Developer</h3>
            <p><b>DJ Computing, Coimbatore</b></p>
            <p><b>September 2024 - Present</b></p>
            <ul>
              <li>Focused on API development and testing, improving application functionality and performance.</li>
              <li>Acquired skills in troubleshooting and resolving technical issues effectively.</li>
              <li>Continued to expand knowledge in API design and cloud computing solutions.</li>
            </ul>

            <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1LW7P7iC-FfwmwK53J36NR8XlJXhwb9xc/view?usp=sharing'>
              <Button variant='outline-success'>
                <FaEye /> Resume
              </Button>
            </a>
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
            <Image src={Profile} style={{ width: '100%', height: 'auto' }} alt='home pic' className='img-fluid' />
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
};

