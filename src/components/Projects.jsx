import { projVariants } from '../data/variants';
import useCustomAnimation from '../hooks/useCustomAnimation';
import { motion } from 'framer-motion';

export default function Projects({ project }) {
  const articleAnim = useCustomAnimation(
    projVariants.seen,
    projVariants.unseen,
    0.3
  );

  return (
    <motion.article
      ref={articleAnim.ref}
      animate={articleAnim.animation}
      whileHover={{ scale: 1.02 }}
    >
      <h4>{project.name}</h4>
      <p>{project.summary}</p>
      <p>
        <a href={project.repo} alt={`${project.name} github repo`}>
          Repo
        </a>{' '}
        |{' '}
        <a href={project.live} alt={`${project.name} live site`}>
          Live
        </a>
      </p>
    </motion.article>
  );
}
