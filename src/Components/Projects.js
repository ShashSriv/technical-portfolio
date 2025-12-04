import React from 'react';
import inventory from '../Assets//Assets/Southwestern.jpg';
import pandas from '../Assets//Assets/Pandas.jpg';
import portfolio from '../Assets//Assets/Portfolio.jpg';  
import linguacv from '../Assets//Assets/LinguaCV.png';
import madness from '../Assets//Assets/marchMadness.jpg';
import { motion } from 'framer-motion';



const Projects = () => {
  // Array of projects
  const projects = [
    { id: 1, title: 'LinguaCV', description: 'LinguaCV is a bilingual résumé-building assistant that helps non-English speakers create professional résumés with ease. It guides users through a voice-based conversation in their native language and automatically generates a polished English résumé using Python and natural language processing to bridge language barriers and empower users to showcase their skills confidently.', link: 'https://devpost.com/software/linguacv', image: linguacv},
    { id:2, title: 'NCAA Bracket Predictor', description: 'Using historical data from NCAA March Madness tournaments and past KenPom Statistics to predict outcomes of 2025 March Madness Torunament. Utilizing machine learning models to predict outcomes of games and simulate the tournament.', link: 'https://github.com/ShashSriv/2025MarchMadnessModel' , image: madness},
    { id: 3, title: 'Southwestern Inventory System', description: 'Finished fullstack inventory management fullstack application created for Southwestern Veterans center in Pittsburgh, PA. Contains real time firestore database updates, restricted login features, and barcode generation. Created using React, Node.js, Google Firestore ', link: 'https://www.youtube.com/watch?v=9A0uSbtWGS4', image: inventory},
    { id: 4, title: 'Pandas Database Project', description: 'Using public databases from the City of Pittsburgh to measure the best neighborhood in the city based on a self selected metric. Made a Jupyter notebook  using Python language with pandas and matplotlib utilization to analyze data regarding parks around Pittsburgh', link: 'https://github.com/ShashSriv/Best-Neighborhood-Pittsburgh', image: pandas},
    { id: 5, title: 'Responsive React.js Portfolio', description: 'First experience with Node.js and React.js. Learned many aspects of bootstrapping and CSS styling to provide aesthetic components to web pages. Planning code to be easily maintained and updated with future experiences', link: 'https://github.com/ShashSriv/Responsive-portfolio?tab=readme-ov-file' , image: portfolio}
    //Input additional projects here
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
