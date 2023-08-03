import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.svg';
import styles from './header.module.scss';
import Menu from '../Menu';
import { useRouter } from 'next/router';

export default function Header(props) {
  const [menu, setMenu] = React.useState(0);
  const router = useRouter();
  const isHome = router.pathname === '/';
  const isProjects = router.pathname.startsWith('/projects');
  const [background, setBackground] = React.useState(true);
  const variants = {
    light: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: 'spring',
        damping: 4,
        stiffness: 40,
      },
    },
    dark: {
      rotate: 180,
      opacity: 1,
      transition: {
        duration: 1,
        type: 'spring',
        damping: 4,
        stiffness: 40,
      },
    },
  };
  // React.useEffect(() => {
  //   const windowScroll = window.addEventListener('scroll', () => {
  //     if (window.scrollY > 100) {
  //       setBackground(true);
  //     } else {
  //       setBackground(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener('scroll', windowScroll);
  //   };
  // }, []);

  return (
    <>
      <header
        className={`${styles.header} ${
          !isHome ? null : background ? null : styles.opacity
        }`}
      >
        <div className={`${styles.logo}`}>
          <Image src={logo} alt='Hasathcharu Logo' className={styles.logoImg} />
        </div>
        {isHome ? (
          <motion.div
            className={`${styles.btn} ${styles.menuBtn}`}
            onClick={() => setMenu((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} />
          </motion.div>
        ) : (
          <motion.div
            className={`${styles.btn} ${styles.menuBtn}`}
            onClick={() =>
              isProjects ? router.push('/#projects') : router.push('/')
            }
          >
            <FontAwesomeIcon icon={faHome} />
          </motion.div>
        )}
      </header>
      {isHome ? (
        <Menu
          show={menu}
          handleTheme={props.handleTheme}
          theme={props.theme}
          setShow={() => setMenu((prev) => !prev)}
          user={props.user}
        />
      ) : null}
    </>
  );
}
