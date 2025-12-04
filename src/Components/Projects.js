import proposalImg from '../Assets/Assets/proposal.jpg';
import safetyImg from '../Assets/Assets/safety.png';
import infographicImg from '../Assets/Assets/infographic.jpg';
import majorProjectImg from '../Assets/Assets/finalproject.jpg';
import usabilityImg from '../Assets/Assets/usability.jpg';
import presentationImg from '../Assets/Assets/presentation.jpg';
import safetydocument from '../Assets/Assets/SafetyDocumentFinal.pdf';
import infographic from '../Assets/Assets/API Infographic.pdf';
import { motion } from 'framer-motion';



const Projects = () => {
  // Array of projects
    const projects = [
    { 
      id: 1, 
      title: 'Project Proposal', 
      description: 
        'A formal project proposal outlining the problem space, intended audience, research questions, and planned deliverables. This document established the foundation for my semester-long project and demonstrated my ability to plan professional communication strategically.', 
      link: 'https://docs.google.com/document/d/106LQa43E-N-yKU1sbEcfR8GmYzK7_dShB0pjZWavIF8/edit?usp=sharing', 
      image: proposalImg
    },
    { 
      id: 2, 
      title: 'Safety Document', 
      description: 
        'A comprehensive safety document describing procedures, hazards, recommended practices, and risk mitigation strategies for a workplace environment. This assignment illustrates my ability to consider liability, clarity, and responsibility in technical writing.', 
      link: safetydocument, 
      image: safetyImg
    },
    { 
      id: 3, 
      title: 'Infographic', 
      description: 
        'An infographic designed to communicate complex information visually, focusing on clarity, accessibility, and visual hierarchy. This project demonstrates my skills in design, audience awareness, and concise technical communication.', 
      link: infographic, 
      image: infographicImg
    },
    { 
      id: 4, 
      title: 'Catbot AI Project', 
      description: 
        'The final chatbot project synthesizing research, analysis, drafting, and revision into a polished professional website. This project demonstrates my ability to communicate effectively in a group workplace genre while incorporating audience considerations and revision cycles.', 
      link: 'https://github.com/vitalune/CatBot', 
      image: majorProjectImg
    },
    { 
      id: 5, 
      title: 'Usability Study', 
      description: 
        'A usability test conducted on usage of CatBot, including planning, script creation, user testing, data collection, and analysis. This project showcases my ability to evaluate real-world usability issues and communicate findings professionally.', 
      link: 'https://docs.google.com/document/d/176qWVZrH0WQRXBLXXEJFkXfcN-RnHxukiaZPuO17jmI/edit?tab=t.0', 
      image: usabilityImg
    },
    { 
      id: 6, 
      title: 'Cloud Presentation', 
      description: 
        'A professional oral presentation about the power of major cloud hosting companies and communicating key information to a general audience. This artifact highlights public speaking skills, organization, visuals, and clarity of delivery.', 
      link: 'https://docs.google.com/presentation/d/1ORtik4tpRWmN5V7P-x3T2uiBAlRvMRj-kMiT1DzAw0M/edit?usp=sharing', 
      image: presentationImg
    }
  ];

  return (
    <section id="projects" className="projects-grid">   
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
        >
          <div className="project-card-new">
            <img src={project.image} alt={project.title} className="project-card-img" />
            <div className="project-card-text-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-card-overlay">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-button">View Project</a>
            </div>
          </div>
        </motion.div>
      ))}      
    </section>
  );
};

export default Projects;
