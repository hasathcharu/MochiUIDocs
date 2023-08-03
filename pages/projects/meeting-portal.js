import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SubHeading } from '../../components/Headings';
import { motion } from 'framer-motion';
import SSkillCard from '../../components/SSkillCard';
import Button from '../../components/Button';
import styles from '../../styles/blog.module.scss';
import meetingportal from '../../images/meeting-portal.png';
import meetingportaldb from '../../images/meeting-portaldb.png';
import meetingportallink from '../../images/meeting-portallink.png';

import {
  faReact,
  faNodeJs,
  faCloudflare,
  faDigitalOcean,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import mysql from '../../images/mysql.svg';
import nextjs from '../../images/nextjs.svg';
import zoom from '../../images/zoom.svg';
import Image from 'next/image';
import Link from '../../components/Link';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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
        <title>Meeting Portal</title>
      </Head>
      <motion.section
        className='about'
        id='about'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <h1 className={styles.mainTitle}>Meeting Portal</h1>
        <span>Updated on 26th June 2023</span>
        <p className={styles.mainDesc}>
          A simple meeting portal built with Next.js and Express.js.
        </p>
        <Button
          icon={faArrowUpRightFromSquare}
          class='default'
          text='View Source Code'
          handleLoading={() => {
            window.open(
              'https://github.com/hasathcharu/meet.hasathcharu.com',
              '_blank'
            );
          }}
        />
        <SubHeading left>Introduction</SubHeading>
        <Image
          src={meetingportal}
          className={styles.image}
          alt='Meeting Portal Home Page'
        />
        <p className={styles.imageCaption}>Meeting Portal Home Page</p>
        <p className={styles.description}>
          This portal syncs with my Zoom account and automatically updates
          whenever I create, start, stop, or delete a meeting. When a meeting is
          created, I as the host can assign it a shortened public URL. This
          shows the <b>live status including the real-time participant count</b>{' '}
          of the meeting, and anyone can join the meeting by clicking the join
          button. For example, you can go to this link to check it out.
          <br />
          <br />
          <Link
            href='https://meet.hasathcharu.com/j/demo-meeting'
            target='_blank'
          >
            https://meet.hasathcharu.com/j/demo-meeting
          </Link>
          <br />
          <br />
        </p>
        <Image
          src={meetingportallink}
          className={styles.image}
          alt='Meeting Portal Join Meeting'
        />
        <p className={styles.imageCaption}>Meeting Portal Join Meeting Page</p>
        <p className={styles.description}>
          Moreover, frequent users can also create an account and view all of
          their meetings assigned to them on the dashboard, and as an
          administrator, I can assign and unassign meetings to users. This
          dashboard also shows the live status of the meetings including the
          real-time participant count of the currently live meeting.
        </p>
        <Image
          src={meetingportaldb}
          className={styles.image}
          alt='Meeting Portal User Dashboard'
        />
        <p className={styles.imageCaption}>Meeting Portal User Dashboard</p>
        <SubHeading left>Methodology</SubHeading>
        <div className={styles.techArea}>
          <SSkillCard iconimage={nextjs} />
          <SSkillCard icon={faReact} />
          <SSkillCard icon={faSass} />
          <SSkillCard iconimage={zoom} />
          <SSkillCard icon={faNodeJs} />
          <SSkillCard iconimage={mysql} />
          <SSkillCard icon={faCloudflare} />
          <SSkillCard icon={faDigitalOcean} />
        </div>
        <p className={styles.description}>
          This project was built with Next.js and Express.js. The frontend is
          built with Next.js and the backend is built with Express.js. Both the
          web application and the REST API are hosted on a Digital Ocean
          Droplet. The database used is MySQL database.
        </p>
        <p className={styles.description}>
          I have created a WebHook in Zoom that sends a POST request to the REST
          API whenever a meeting is created, started, stopped, or deleted. The
          REST API then updates the database accordingly. The frontend then
          fetches the data from the REST API and displays it on the frontend.
          For the authentication, I have used JWT tokens. The frontend and the
          backend are hosted on the same server, so CORS is not an issue.
        </p>
        <p className={styles.description}>
          For SSL, I used Cloudflare to proxy all the requests to the server.
          Cloudflare provides a free SSL certificate, so I didn't have to worry
          about that.
        </p>
        <Button
          icon={faArrowUpRightFromSquare}
          class='default'
          text='View Source Code'
          handleLoading={() => {
            window.open(
              'https://github.com/hasathcharu/meet.hasathcharu.com',
              '_blank'
            );
          }}
        />
        <p className={styles.description}>
          Initially, this project was built with HTML, CSS, JavaScript and PHP.
          Then I learned Node.js and Express.js so I decided to rebuild the
          project. Ultimately, I also decided to use Next.js for the frontend
          because it is a very powerful framework and it is very easy to use.
        </p>
        <Button
          icon={faArrowUpRightFromSquare}
          class='default'
          text='View Source Code for Node.js Version'
          handleLoading={() => {
            window.open(
              'https://github.com/hasathcharu/node_meet.hasathcharu.com',
              '_blank'
            );
          }}
        />
        <SubHeading left>Final Thoughts</SubHeading>
        <p className={styles.description}>
          I believe that I was able to learn a lot about web development in
          common and helped me understand important concepts like Webhooks, REST
          APIs etc. Moreover, as this project originally was built with simple
          HTML and PHP, I was able to learn a lot about how to build a web
          application from scratch. Progressing through different versions, from
          a monolithic PHP application to a modern web application with a
          totally separated frontend and backend, I was able to learn how modern
          web applications work.
        </p>
      </motion.section>
    </div>
  );
}
