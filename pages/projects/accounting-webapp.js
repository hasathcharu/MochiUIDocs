import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SubHeading } from '../../components/Headings';
import { motion } from 'framer-motion';
import SSkillCard from '../../components/SSkillCard';
import styles from '../../styles/blog.module.scss';
import accs1 from '../../images/accs1.png';
import accs3 from '../../images/accs3.png';
import accs4 from '../../images/accs4.png';
import accs5 from '../../images/accs5.png';

import {
  faJsSquare,
  faHtml5,
  faSass,
  faPhp,
} from '@fortawesome/free-brands-svg-icons';
import mysql from '../../images/mysql.svg';
import nextjs from '../../images/nextjs.svg';
import zoom from '../../images/zoom.svg';
import Image from 'next/image';
import Link from '../../components/Link';
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
        <title>Accounting Web App | Excel Nightmares</title>
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
          Accounting Web App | Excel Nightmares
        </h1>
        <span>Updated on 6th June 2023</span>
        <p className={styles.mainDesc}>
          A basic accounting web app built with HTML, CSS, JavaScript and PHP.
        </p>
        <SubHeading left={true}>Introduction</SubHeading>
        <Image
          src={accs1}
          className={styles.image}
          alt='Excel Nightmares Home Page'
        />
        <p className={styles.imageCaption}>Excel Nightmares Home Page</p>
        <p className={styles.description}>
          This is a group project that we did with a team for a small
          assignment. This application can generate Statements of Financial
          Position and Statements of Profit/Loss by entering the details of the
          transactions which are entered by searching for the account type. As
          shown below. The application will automatically suggest the account
          type upon user input.
        </p>
        <Image
          src={accs5}
          className={styles.image}
          alt='Inputting data into the application'
        />
        <p className={styles.imageCaption}>
          Inputting data into the application
        </p>
        <p className={styles.description}>
          After entering the details, the user can generate the Statements by
          clicking the generate button. The application will then display the
          Statements of Financial Position and Statements of Profit/Loss. The
          application also has a feature to export the Statements into an
          encrypted file which can only be viewed by importing to the
          application itself.
        </p>
        <Image
          src={accs3}
          className={styles.image}
          alt='Output of the application'
        />
        <p className={styles.imageCaption}>Output of the application</p>
        <Image
          src={accs4}
          className={styles.image}
          alt='Output of the application'
        />
        <p className={styles.imageCaption}>Output of the application</p>
        <SubHeading left>Methodology</SubHeading>
        <div className={styles.techArea}>
          <SSkillCard icon={faHtml5} />
          <SSkillCard icon={faSass} />
          <SSkillCard icon={faJsSquare} />
          <SSkillCard icon={faPhp} />
          <SSkillCard iconimage={mysql} />
        </div>
        <p className={styles.description}>
          This application was built with HTML, CSS, JavaScript and PHP. The
          application uses MySQL as the database. The application is hosted on
          the same server as the database.
        </p>
        <SubHeading left>Final Thoughts</SubHeading>
        <p className={styles.description}>
          This was a fun project to work on. We learned a lot about how
          accounting software works as the assignment was to do a small case
          study on different accounting software and how they work. We tried to
          implement our findings into this application and we believe it turned
          out pretty well.
        </p>
      </motion.section>
    </div>
  );
}
