import React from 'react';
import { Header } from './Header';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TypewriterComponent from 'typewriter-effect';

export const Home = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className='justify-content-center align-items-center m-1' >
          <Col sm={12} md={6} lg={6}>
            <h1>
              Hello !!<span className='wave'>{String.fromCodePoint(0x1F44B)}</span>
            </h1>
            <h1>
              I'm <b className='text-success'>Pavithiran</b>
            </h1>
            <h3 className='red-text'>
              
              
                <TypewriterComponent
                  
                
                  options={{
                    strings: [
                      "I am a MERN Stack Developer",
                      "I am a Web Developer",
                      "I am a Backend Developer",
                      "I am a Self-Motivator",
                      
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    

                  }}
                />
              
            </h3>
          </Col>
          <Col sm={12} md={6} lg={6} className='text-center'>
            <Image
              src='https://www.webstackacademy.com/wp-content/uploads/2023/01/fullStack-MERN.png'
              alt='profile-image'
              fluid
            />
          </Col>
        </Row>
        <hr/>
      </Container>
    </>
  );
};
