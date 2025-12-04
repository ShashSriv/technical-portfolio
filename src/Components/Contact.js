import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
    const phoneNumber = '484-986-5391';
    const email = "shashwat.avin@gmail.com"
    return (
        <section id="contact" className="contact-banner">
            <Row className="align-items-center">
                <Col className="contact-heading">
                    <TypeAnimation
                        sequence={[
                            'Lets Connect!',
                            1000,
                            '',
                            1000
                        ]}
                        wrapper="h1"
                        speed={50}
                        repeat={Infinity}
                    />
                    <p>Feel free to reach out at anytime!</p>
                </Col>
                <Col className="contact-info">
                    <div className = "contact-card">
                        <h2>How to reach me</h2>
                        <p><strong>Phone:</strong> {phoneNumber}</p>
                        <p><strong>Email:</strong> {email}</p>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Contact;
