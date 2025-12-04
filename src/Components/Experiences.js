import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnsysLogo from '../Assets/Assets/AnsysLogoNoBG.png';
import UVSLogo from '../Assets/Assets/UVSLogoNoBG.png';
import { motion } from 'framer-motion';
   

const Experiences = () => {

    const cardVariants = {
        initial: { opacity: 0, y: 24 },
        inView: { opacity: 1, y: 0 }
    };

    return (
        <section className='experiences' id='experiences'>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <motion.h1 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: 'easeOut' }}>Work Experiences</motion.h1>
                        <Row className="experience-grid gy-4">
                            <Col xs={12} md={6}>
                                <motion.div
                                    className="experience-card"
                                    variants={cardVariants}
                                    initial={{ opacity: 0, x: -24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <img className="experience-logo" src={AnsysLogo} alt="Ansys logo" />
                                    <motion.div className="experience-overlay" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                                        <motion.div className="experience-overlay-content" initial={{ y: 16 }} whileHover={{ y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                                            <h3>Ansys</h3>
                                            <p>Go client development, REST API design, MongoDB integration, containerized services, CI integration.</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </Col>
                            <Col xs={12} md={6}>
                                <motion.div
                                    className="experience-card"
                                    variants={cardVariants}
                                    initial={{ opacity: 0, x: 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                                >
                                    <img className="experience-logo" src={UVSLogo} alt="UVS Infotech logo" />
                                    <motion.div className="experience-overlay" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                                        <motion.div className="experience-overlay-content" initial={{ y: 16 }} whileHover={{ y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                                            <h3>UVS Infotech</h3>
                                            <p>AI agent frameworks, tool-augmented LLMs, Python backends, API orchestration, prompt tooling.</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experiences;
