import React from 'react';
import AboutSnippet from '../components/AboutSnippet';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { mainVariants, projTitleVariants } from '../data/variants';
import useCustomAnimation from '../hooks/useCustomAnimation';
import '../App.css';
import TechStack from '../components/TechStack';

export default function Main() {
  const projs = useCustomAnimation(
    projTitleVariants.seen,
    projTitleVariants.unseen,
    0.4
  );

  return (
    <motion.main
      variants={mainVariants}
      initial={'initial'}
      animate={'animate'}
    >
      <Intro />
      <AboutSnippet />

      <motion.div
        className='projects'
        ref={projs.ref}
        animate={projs.animation}
        inherit={false}
      >
        <h3>Projects</h3>
        <p>
          See more of my work in{' '}
          <a href='https://github.com/diyanamendoza'>Github land</a>.
        </p>
      </motion.div>
      {projects.map((project, index) => (
        <Projects key={index} project={project} />
      ))}
      <TechStack />
    </motion.main>
  );
}
