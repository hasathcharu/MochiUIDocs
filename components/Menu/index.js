import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleHalfStroke,
  faEnvelope,
  faGraduationCap,
  faGhost,
  faHouse,
  faStar,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-scroll';
import styles from './menu.module.scss';

export default function Menu(props) {
  const menuVariants = {
    hidden: {
      scale: 0,
      display: 'grid',
      originX: 1,
      originY: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
      },
    },
    visible: {
      scale: 1,
      originX: 1,
      opacity: 1,
      originY: 0,
      display: 'grid',
      transition: {
        duration: 0.4,
        type: 'spring',
      },
    },
  };
  const darkVariants = {
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

  return (
    <AnimatePresence>
      {props.show && (
        <div className={styles.menuBack} onClick={props.setShow}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={styles.menu}
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <div className={styles.menuIcons}>
              <motion.div
                className={styles.icon}
                onClick={props.handleTheme}
                initial={props.theme}
                variants={darkVariants}
                animate={props.theme}
              >
                <FontAwesomeIcon icon={faCircleHalfStroke} fixedWidth={true} />
              </motion.div>
            </div>
            <div className={styles.menuOptions}>
              <ul>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faHouse} fixedWidth={true} />
                      </span>
                      <span>Home</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faGhost} fixedWidth={true} />
                      </span>
                      <span>About</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faCode} fixedWidth={true} />
                      </span>
                      <span>Projects</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faStar} fixedWidth={true} />
                      </span>
                      <span>Skills</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='education'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          fixedWidth={true}
                        />
                      </span>
                      <span>Education</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} fixedWidth={true} />
                      </span>
                      <span>Contact</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
