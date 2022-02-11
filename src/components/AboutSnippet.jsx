import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useCustomAnimation from '../hooks/useCustomAnimation';
import { snippetVariants } from '../data/variants';
import '../App.css';

export default function AboutSnippet() {
  const textAnim = useCustomAnimation(
    snippetVariants.seen,
    snippetVariants.unseen,
    0.3
  );

  const transition = { duration: 4, repeat: Infinity, ease: 'easeInOut' };
  const hat = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='svg9840'
      viewBox='0 0 639.13 441.59'
    >
      <g id='layer1' transform='translate(-38.254 -179.35)'>
        <g
          id='g9835'
          stroke='currentColor'
          fill='none'
          transform='matrix(5.5071 0 0 5.5071 -1052 -2439.7)'
        >
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.5, 1], pathLength: 1 }}
            transition={transition}
            id='path575'
            strokeLinejoin='round'
            strokeWidth='2.38'
            d='m219.81 506.7c0.17-0.77-1.18 10.41-0.92 7.99 1.71-9.5 0.99-19.79 4.82-28.83 0.95-1.99 2.17-3.26 3.73-3.17 22.19 0.69 45.07-22.3 61.71 28.81 51.31 24.02 3.57 43.31-37.05 41.6-40.14-1.68-74.42-30.62-32.29-46.4z'
          />
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.5, 1], pathLength: 1 }}
            transition={transition}
            id='path576'
            strokeWidth='1.19'
            d='m218.77 513.56c25.65 16.12 67.95 6.18 69.69-1.71 2.42 2.74 0 10.29 0 10.29-11.1 14.41-64.84 11.32-70.73 1.03-0.69-2.75 0.69-8.58 1.04-9.61z'
          />
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.5, 1], pathLength: 1 }}
            transition={transition}
            id='path590'
            strokeWidth='.44704pt'
            d='m223.82 516.53c4.16 2.06 16.1 5.16 20.95 5.5 3.47 2.41 1.74 6.63 0.35 9.37-9.36 0-20.11-2.4-22.88-5.49-1.74-3.09-0.15-6.29 1.58-9.38z'
          />
        </g>
      </g>
    </svg>
  );
  return (
    <>
      <motion.section ref={textAnim.ref} animate={textAnim.animation}>
        {hat}

        <div>
          <p>
            I've worn a lot of hats. Earlier on, I worked my heart out in the
            nonprofit world for issues I care about. I've also been a trainer,
            communications specialist, and a designer.
          </p>
          <p>In 2019, I dove headlong into tech.</p>
          <p>
            <Link to='/about'>More about me.</Link>
          </p>
        </div>
      </motion.section>
    </>
  );
}
