// import React from 'react'
// import { Button, Col, Container, Image, Row } from 'react-bootstrap'
// import Profile from './Images/MyProfile.jpg';
// import { FaEye } from 'react-icons/fa';


// export const About = () => {
//   return (
//     <>
     
//      <Container fluid id='about'>
        
//         <Row className='text-center'>
//           <h1>Personal Details</h1>

//         </Row>
//         <Row className='m-1 p-2 mt-5'>
//            <Col>
//               <p>

//                 A dedicated and motivated Full Stack Developer, I hold a degree from KSR College of Engineering. 
//                 Additionally, I have successfully completed a comprehensive Full Stack Developer course at Guvi, earning certification.
//                 Eager to apply my expertise in front-end and back-end technologies, I am driven by a passion for creating seamless and efficient web applications. 
                
               
//               </p>

//               <p>
//                 Having honed my skills through hands-on experience and structured learning, I am well-equipped to contribute innovative solutions.
//                 My goal is to collaborate within dynamic development teams, leveraging my knowledge to drive the company's development objectives. 
//                 Committed to continuous learning, I bring a proactive mindset and a solid foundation to the ever-evolving field of Full Stack Development.

//               </p>
//               <p>

//                 <Button variant='outline-success'>
//                   <FaEye/>
//                    <span> Resume</span>
//                   </Button>

//               </p>
              
             
             
             
//            </Col>
//            <Col>
//              <Image src={Profile} style={{ width: "50%",height:"80%" }}
//                 alt="home pic"
//                 className="d-block mx-auto" />
//            </Col>
         
            
//         </Row>
//         <Row> 

//         </Row>
//         <hr/>
//      </Container>
//     </>
//   )
// }


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
        <Row className='m-1 p-2 mt-5 text-center'>
          <Col xs={12} sm={12} md={6} lg={6}>
            <p md={3}>
              A dedicated and motivated Full Stack Developer, I hold a degree from KSR College of Engineering.
              Additionally, I have successfully completed a comprehensive Full Stack Developer course at Guvi, earning certification.
              Eager to apply my expertise in front-end and back-end technologies, I am driven by a passion for creating seamless and efficient web applications.
            </p>
            <p md={3}>
              Having honed my skills through hands-on experience and structured learning, I am well-equipped to contribute innovative solutions.
              My goal is to collaborate within dynamic development teams, leveraging my knowledge to drive the company's development objectives.
              Committed to continuous learning, I bring a proactive mindset and a solid foundation to the ever-evolving field of Full Stack Development.
            </p>
            <p>
              
                
                  <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1KIiumPZQX_6Ns9djZDdLlzir6Cj_QL6X/view?usp=sharing'>
                    <Button variant='outline-success'>
                    <FaEye /> Resume
                    </Button>
                  </a>
                
             
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} >
            <Image src={Profile} style={{ width: '65vh' }} alt='home pic' className=' img-fluid' />
          </Col>
        </Row>
        
        <hr />
      </Container>
    </>
  );
};






// A dedicated and motivated Full Stack Developer, I hold a degree from KSR College of Engineering and have successfully completed a comprehensive Full Stack Developer course at Guvi, earning certification.

// Eager to apply my expertise in front-end and back-end technologies, I am driven by a passion for creating seamless and efficient web applications. Having honed my skills through hands-on experience and structured learning, I am well-equipped to contribute innovative solutions.

// My goal is to collaborate within dynamic development teams, leveraging my knowledge to drive the company's development objectives. Committed to continuous learning, I bring a proactive mindset and a solid foundation to the ever-evolving field of Full Stack Development.