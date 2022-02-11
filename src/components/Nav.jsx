import CustomLink from './CustomLink';
import Socials from './Socials';

export default function Nav() {
  return (
    <nav>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/about'>About</CustomLink>
      <Socials />
    </nav>
  );
}
