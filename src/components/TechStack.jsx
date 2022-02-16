import './TechStack.css';
import { motion } from 'framer-motion';
import useCustomAnimation from '../hooks/useCustomAnimation';
import { toolsVariants } from '../data/variants';

export default function TechStack() {
  const textAnim = useCustomAnimation(
    toolsVariants.seen,
    toolsVariants.unseen,
    0.3
  );

  const databaseOutline = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      stroke='rgb(49, 124, 215)'
      alt='database icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      />
    </svg>
  );

  const cog = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='rgb(49, 124, 215)'
      alt='cog icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      />
    </svg>
  );

  const desktop = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='rgb(49, 124, 215)'
      alt='desktop icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      />
    </svg>
  );

  const languages = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='rgb(49, 124, 215)'
      alt='language icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
      />
    </svg>
  );

  return (
    <motion.div
      ref={textAnim.ref}
      animate={textAnim.animation}
      className='techstack'
    >
      <h3>Toolkit</h3>
      <p>Subject to constant growth.</p>
      <div className='tools'>
        <div className='tool-list'>
          {languages}
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className='tool-list'>
          {desktop}
          <ul>
            <li>React</li>
            <li>Framer Motion</li>
          </ul>
        </div>
        <div className='tool-list'>
          {databaseOutline}
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Adonis</li>
            <li>PostgreSQL</li>
            <li>Supabase</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className='tool-list'>
          {cog}
          <ul>
            <li>Git</li>
            <li>Postman</li>
            <li>VScode</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
