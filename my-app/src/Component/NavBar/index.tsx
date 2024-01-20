
import Link from 'next/link';
import styles from './styles/style-navbar.module.css';
import { useRouter } from 'next/router';

const NavBar = () => {
  return (
    <nav className={styles['Navbar']}>
      <h1> NewsAPP </h1>
      <div>
        <ul className={styles.NavbarMenu}>
          <li>
            <Link href='/home'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/register'>
              Register
            </Link>
          </li>
          <li>
            <Link href='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
