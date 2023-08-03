import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SubHeading } from '../../components/Headings';
import { motion } from 'framer-motion';
import SSkillCard from '../../components/SSkillCard';
import styles from '../../styles/blog.module.scss';
import ascendants from '../../images/ascendants.jpg';
import proteus from '../../images/proteus.svg';
import kicad from '../../images/kicad.svg';
import blender from '../../images/blender.svg';
import ambconsolepcb from '../../images/ambconsolepcb.png';
import ambconsoleproteus from '../../images/ambconsoleproteus.png';
import atmel from '../../images/atmel.svg';
import { faAws, faPhp } from '@fortawesome/free-brands-svg-icons';
import mysql from '../../images/mysql.svg';
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
        <title>Priority System for Emergency Vehicles</title>
      </Head>
      <motion.section
        className='about'
        id='about'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <h1 className={styles.mainTitle}>
          Priority System for Emergency Vehicles
        </h1>
        <span>Updated on 24th April 2023</span>
        <p className={styles.mainDesc}>
          An embedded system project to prioritize emergency vehicles at traffic
          junctions.
        </p>
        <SubHeading left>Our Team</SubHeading>
        <Image class={styles.image} src={ascendants} alt='Team Ascendants' />
        <p className={styles.imageCaption}>
          Team Ascendants, From left: Gimhani Gunasinghe, Komuthu Fernando,
          Haritha Hasathcharu, Nadun Rupasinghe and Harini Kavindya
        </p>
        <SubHeading left>Introduction</SubHeading>
        <div className={styles.image}>
          <Youtube embedId='k7ZwPLb38cY' />
        </div>
        <p className={styles.description}>
          This is our first year group project for university. This is a
          priority system designed for emergency vehicles such as ambulances so
          that they can use the console to directly control the traffic lights
          of the junction in front of them.
        </p>
        <p className={styles.description}>
          Moreover, it can also be used to notify the nearest hospital about the
          emergency patient along with the vitals recorded by the system's heart
          rate monitor, temperature sensor and pulse oximeter.
        </p>
        <p className={styles.description}>
          We were able to successfully simulate the system using Proteus and all
          the PCB designs were done using KiCAD. Unfortunately, we were not able
          to implement the system in real life due to the COVID-19 pandemic.
        </p>
        <SubHeading left>Methodology</SubHeading>
        <div className={styles.techArea}>
          <SSkillCard iconimage={atmel} />
          <SSkillCard iconimage={proteus} />
          <SSkillCard iconimage={kicad} />
          <SSkillCard iconimage={blender} />
          <SSkillCard iconimage={mysql} />
          <SSkillCard icon={faPhp} />
          <SSkillCard icon={faAws} />
        </div>
        <p className={styles.description}>
          Due to the COVID-19 pandemic, we had to do this project remotely.
          Therefore, we were only able to simulate the system using Proteus. The
          development was done on Atmel Studio. We also used Blender to create a
          3D model of the system. Finally, we used KiCAD to design the PCBs and
          the schematics. We used AWS to host the database and the backend that
          connects all the systems together.
        </p>
        <Image
          class={styles.image}
          src={ambconsoleproteus}
          alt='Ambulance Control Proteus Simulation'
        />
        <p className={styles.imageCaption}>
          Proteus Simulation for the Ambulance Console
        </p>
        <Image
          class={styles.image}
          src={ambconsolepcb}
          alt='PCB Design for the Ambulance Console'
        />
        <p className={styles.imageCaption}>
          PCB Design for the Ambulance Console
        </p>
        <SubHeading left>Final Thoughts</SubHeading>
        <p className={styles.description}>
          Though we did not get to implement the system in real life, we were
          able to simulate it and get a good understanding of how it works. We
          also learned a lot about teamwork and how to work remotely.
        </p>
        <p className={styles.description}>
          I also personally believe that we as a group learnt a lot about
          teamwork and helped paved the way to our success in the future.
        </p>
      </motion.section>
    </div>
  );
}
