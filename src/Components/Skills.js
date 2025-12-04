import React, { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Container } from 'react-bootstrap';

const Skills = () => {
    const containerRef = useRef(null);
    const engineRef = useRef(Matter.Engine.create());
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = [
        { name: 'JavaScript', size: 75, prompt: { title: 'Mission: JavaScript Mastery', text: 'Acquired during advanced web development training missions. Used to build dynamic and interactive user interfaces for LinguaCV and Southwestern Veteran\'s center.' } },
        { name: 'React', size: 75, prompt: { title: 'Mission: React Specialist', text: 'Specialized training in the React framework for building complex, single-page applications for my personal portfolio and projects such as LinguaCV.' } },
        { name: 'Python', size: 85, prompt: { title: 'Mission: Python Specialist', text: 'Utilized Python for backend development, data analysis, and automating routine tasks, significantly improving operational efficiency across my workflow' } },
        { name: 'Java', size: 80, prompt: { title: 'Mission: Enterprise Systems with Java', text: 'Engineered robust, large-scale enterprise systems for logistics and resource management' } },
        { name: 'Go', size: 90, prompt: { title: 'Mission: High-Performance Go', text: 'Built high-concurrency services and networking tools with Go, essential for real-time communication and data processing at Ansys' } },
        { name: 'MongoDB', size: 75, prompt: { title: 'Mission: NoSQL Database Management', text: 'Managed and designed flexible, scalable NoSQL databases with MongoDB for storing vast amounts of unstructured data' } },
        { name: 'Postman', size: 75, prompt: { title: 'Mission: API Integration', text: 'Used Postman for extensive API testing and validation, ensuring reliable communication between microservices.' } },
        { name: 'REST APIs', size: 95, prompt: { title: 'Mission: RESTful Architect', text: 'Designed and implemented RESTful APIs that serve as the primary interface for microservices as a part of Ansys Notebook' } },
        { name: 'Docker', size: 90, prompt: { title: 'Mission: Containerization with Docker', text: 'Containerized applications using Docker for consistent deployment environments across different systems and platforms.' } },
        { name: 'CI/CD', size: 90, prompt: { title: 'Mission: Continuous Delivery', text: 'Established CI/CD pipelines for microservices to automate the build, testing, and deployment of software, enabling rapid iteration and delivery of new features.' } },
        { name: 'Git', size: 95, prompt: { title: 'Mission: Version Control with Git', text: 'Mastered Git for version control, enabling effective collaboration and code management within large, distributed development teams.' } },
        { name: 'Agile', size: 85, prompt: { title: 'Mission: Agile Methodologies', text: 'Led and participated in SCRUM talks using Agile methodologies, fostering iterative development and rapid response to changing requirements.' } },
        { name: 'Github Actions', size: 85, prompt: { title: 'Mission: Github Actions', text: 'Created custom Github Actions for CI/CD and other workflow automations.' } },
        { name: 'RAG', size: 70, prompt: { title: 'Mission: Retrieval Augmented Generation', text: 'Built and fine-tuned RAG agents at UVS and LinguaCV to enhance information retrieval and user interaction.' } },
        { name: 'Kubernetes', size: 90, prompt: { title: 'Mission: Orchestration with Kubernetes', text: 'Managed containerized applications at scale using Kubernetes, ensuring high availability and resilience for critical systems.' } },
        { name: 'AWS', size: 80, prompt: { title: 'Mission: AWS Cloud Services', text: 'Leveraged a wide range of AWS services for building and deploying scalable, secure, and cost-effective cloud solutions.' } },
        { name: 'Cloud Dev', size: 95, prompt: { title: 'Mission: Cloud Development', text: 'Extensive experience in developing and deploying cloud-native applications, with a focus on serverless architectures.' } },
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const engine = engineRef.current;
        let animationFrameId;

        const setup = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            Matter.World.clear(engine.world);
            Matter.Engine.clear(engine);
            container.innerHTML = '';

            const { clientWidth: width, clientHeight: height } = container;
            engine.world.gravity.y = 0.3;

            const ground = Matter.Bodies.rectangle(width / 2, height + 30, width, 60, { isStatic: true, render: { visible: false } });
            const ceiling = Matter.Bodies.rectangle(width / 2, -30, width, 60, { isStatic: true, render: { visible: false } });
            const leftWall = Matter.Bodies.rectangle(-30, height / 2, 60, height, { isStatic: true, render: { visible: false } });
            const rightWall = Matter.Bodies.rectangle(width + 30, height / 2, 60, height, { isStatic: true, render: { visible: false } });
            Matter.World.add(engine.world, [ground, ceiling, leftWall, rightWall]);

            const bubbleElements = [];
            const bodies = skills.map(skill => {
                const bubble = document.createElement('div');
                bubble.classList.add('skill-bubble');
                bubble.style.width = `${skill.size}px`;
                bubble.style.height = `${skill.size}px`;
                bubble.innerHTML = `<span>${skill.name}</span>`;
                container.appendChild(bubble);
                bubbleElements.push(bubble);

                bubble.addEventListener('click', () => {
                    setSelectedSkill(skill);
                });

                return Matter.Bodies.circle(
                    Math.random() * width,
                    Math.random() * height / 2,
                    skill.size / 2,
                    { restitution: 0.6, friction: 0.1 }
                );
            });
            Matter.World.add(engine.world, bodies);

            let mouse = { x: width / 2, y: height / 2 };
            const handleMouseMove = (e) => {
                const rect = container.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            };
            container.addEventListener('mousemove', handleMouseMove);

            let isHovering = false;
            const handleMouseEnter = () => isHovering = true;
            const handleMouseLeave = () => isHovering = false;
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);

            const beforeUpdateListener = () => {
                if (isHovering) {
                    bodies.forEach(body => {
                        const dx = mouse.x - body.position.x;
                        const dy = mouse.y - body.position.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist > 1) {
                            const force = 0.0005 * body.mass;
                            Matter.Body.applyForce(body, body.position, {
                                x: force * dx / dist,
                                y: force * dy / dist
                            });
                        }
                    });
                }
            };
            Matter.Events.on(engine, 'beforeUpdate', beforeUpdateListener);

            (function run() {
                bodies.forEach((body, i) => {
                    const el = bubbleElements[i];
                    if (el) {
                        el.style.transform = `translate(${body.position.x - body.circleRadius}px, ${body.position.y - body.circleRadius}px) rotate(${body.angle}rad)`;
                        const span = el.firstChild;
                        if (span && span.style) {
                            span.style.transform = `rotate(${-body.angle}rad)`;
                        }
                    }
                });
                Matter.Engine.update(engine, 1000 / 60);
                animationFrameId = requestAnimationFrame(run);
            })();

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                Matter.Events.off(engine, 'beforeUpdate', beforeUpdateListener);
            };
        };

        let cleanupListeners = setup();

        const resizeObserver = new ResizeObserver(() => {
            if (cleanupListeners) {
                cleanupListeners();
            }
            cleanupListeners = setup();
        });
        resizeObserver.observe(container);

        return () => {
            resizeObserver.unobserve(container);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (cleanupListeners) {
                cleanupListeners();
            }
            Matter.World.clear(engine.world);
            Matter.Engine.clear(engine);
        };
    }, []);

    return (
        <section id="skills" className="skills-section">
            <Container>
                <h1 className="skills-title">My Orbit of Skills</h1>
                <p className="skills-subtitle">Explore my personal Solar-System of knowledge: Click on a planet to discover more!</p>
                <div className="skills-layout">
                    <div className="mission-prompt">
                        {selectedSkill ? (
                            <div>
                                <h3>{selectedSkill.prompt.title}</h3>
                                <p>{selectedSkill.prompt.text}</p>
                            </div>
                        ) : (
                            <div>
                                <h3>Mission Log</h3>
                                <p>Select a skill to view mission details.</p>
                            </div>
                        )}
                    </div>
                    <div ref={containerRef} className="skills-container"></div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;