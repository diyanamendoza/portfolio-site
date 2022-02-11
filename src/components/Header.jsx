import useHover from '../hooks/useHover';
import Nav from './Nav';
import { headerVariants } from '../data/variants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [hoverRef, isHovered] = useHover();

  const moreName = <aside>aka 'Dee'</aside>;

  return (
    <motion.header
      variants={headerVariants}
      initial={'initial'}
      animate={'animate'}
    >
      <div className='name'>
        <Link to='/'>
          <h1 ref={hoverRef}>diyana m. (she/her)</h1>
        </Link>
        {isHovered && moreName}
      </div>
      <Nav />
    </motion.header>
  );
}
