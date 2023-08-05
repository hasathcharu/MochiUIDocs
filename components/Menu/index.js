import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleHalfStroke,
  faHouse,
  faPersonChalkboard,
  faCircleDot,
  faSquareCheck,
  faClock,
  faCalendar,
  faKeyboard,
  faComputerMouse,
  faSquareCaretDown,
  faSliders,
  faWandMagicSparkles,
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
                    to='home-section'
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
                    to='introduction-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon
                          icon={faPersonChalkboard}
                          fixedWidth={true}
                        />
                      </span>
                      <span>Intro</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='button-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon
                          icon={faComputerMouse}
                          fixedWidth={true}
                        />
                      </span>
                      <span>Button</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='input-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faKeyboard} fixedWidth={true} />
                      </span>
                      <span>Input</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='datepicker-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faCalendar} fixedWidth={true} />
                      </span>
                      <span>DatePicker</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='timepicker-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faClock} fixedWidth={true} />
                      </span>
                      <span>TimePicker</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='dropdown-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon
                          icon={faSquareCaretDown}
                          fixedWidth={true}
                        />
                      </span>
                      <span>DropDown</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='checkbox-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          fixedWidth={true}
                        />
                      </span>
                      <span>CheckBox</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='radio-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faCircleDot} fixedWidth={true} />
                      </span>
                      <span>Radio</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='customize-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon icon={faSliders} fixedWidth={true} />
                      </span>
                      <span>Customize</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass={styles.active}
                    to='example-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className={styles.link}>
                      <span>
                        <FontAwesomeIcon
                          icon={faWandMagicSparkles}
                          fixedWidth={true}
                        />
                      </span>
                      <span>Example</span>
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
