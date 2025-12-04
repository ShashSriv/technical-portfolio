import React from 'react';
import {Button, Row, Container, Col} from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProfilePhoto from '../Assets/Assets/ProfilePhoto.png'

const Banner = () => {
  return (
    <section className="banner" id="home">
      <div>
        <Container>
            <Row className="align-items-center">
                <Col xs = {15} md = {6} xl = {7}>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>Welcome to My Portfolio</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}>My name is Shashwat Srivastava, and I am a Junior at the University of Pittsburgh pursuing a degree in Computer Science. I am passionate about software engineering and have gained valuable professional experience through internships at Ansys and UVS. At these roles, I strengthened my skills in backend development, API design, and scalable software systems, while contributing to impactful engineering solutions.

                      This portfolio reflects both my professional journey and the projects I pursue out of curiosity and community engagement. I am eager to continue expanding my technical expertise through hands-on experiences that challenge me to grow as a developer and contribute meaningfully to innovative projects.</motion.p>
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}>
                      <Button className="learn-more-button" href="#experiences">Learn More</Button>
                    </motion.div>
                </Col> 
                <Col xs = {12} md = {6} xl = {5}>
                  <motion.div className="profile-container" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}>
                    <motion.img whileHover={{ scale: 1.03, rotate: 0.5 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="profile-photo" src={ProfilePhoto} alt="Profile Photo" />
                  </motion.div>
                </Col>
            </Row>
        </Container>
        </div>
    </section>
    
  );
};

export default Banner;
