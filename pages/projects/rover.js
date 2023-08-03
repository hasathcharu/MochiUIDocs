import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SubHeading } from '../../components/Headings';
import { motion } from 'framer-motion';
import SSkillCard from '../../components/SSkillCard';
import styles from '../../styles/blog.module.scss';

import espressif from '../../images/espressif.svg';
import { faAws, faJsSquare, faPhp } from '@fortawesome/free-brands-svg-icons';
import arduino from '../../images/arduino.svg';
import Image from 'next/image';
import Youtube from '../../components/Youtube';
export default function Home() {
  const inView = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
  };
  return (
    <div className='App'>
      <Head>
        <title>Wireless Rover with Camera</title>
      </Head>
      <motion.section
        className='about'
        id='about'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <h1 className={styles.mainTitle}>Wireless Rover with Camera</h1>
        <span>Updated on 6th June 2023</span>
        <p className={styles.mainDesc}>
          A small rover with a camera that can be controlled wirelessly.
        </p>
        <SubHeading left>Introduction</SubHeading>
        <div className={styles.image}>
          <Youtube embedId='Lq5n5ZyMOR8' />
        </div>
        <p className={styles.description}>
          This is a small robot that I made during the quarantine period. It can
          be controlled wirelessly by connecting to its WiFi network, and
          thereby accessing the webpage hosted by the ESP32 CAM module. Here you
          can see a camera feed and control the robot using the buttons on the
          webpage.
        </p>
        <SubHeading left>Methodology</SubHeading>
        <div className={styles.techArea}>
          <SSkillCard iconimage={arduino} />
          <SSkillCard iconimage={espressif} />
          <SSkillCard icon={faJsSquare} />
        </div>
        <p className={styles.description}>
          Using open source libraries and hardware, this rover was built using
          the Arduino IDE and the ESP32 CAM module. The ESP32 CAM module is a 2
          Megapixel camera module with WiFi and Bluetooth capabilities. It is
          also capable of hosting a web server. The rover is controlled by a
          L298N motor driver, which is controlled by the ESP32 CAM module. The
          ESP32 CAM module is programmed using the Arduino IDE.
        </p>

        <SubHeading left>Final Thoughts</SubHeading>
        <p className={styles.description}>
          It definetely was a fun project to work on, and I learnt a lot about
          the ESP32 CAM module and the Arduino IDE. However, the ESP32 CAM was
          not stable enough and it was really hard to get it to work. Moreover,
          the WiFi range was really short and the camera feed was really laggy.
          I would not recommend using the ESP32 CAM module for any serious
          projects.
        </p>
        <p className={styles.description}>
          I also personally believe that we as a group learnt a lot about
          teamwork and helped paved the way to our success in the future.
        </p>
      </motion.section>
    </div>
  );
}
