import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SubHeading } from '../../components/Headings';
import { motion } from 'framer-motion';
import SSkillCard from '../../components/SSkillCard';
import styles from '../../styles/blog.module.scss';
import mongo from '../../images/mongo.svg';
import firebase from '../../images/firebase.svg';

import ascendants from '../../images/ascendants.jpg';
import stripe from '../../images/stripe.svg';
import products from '../../images/freshlyy-products.png';
import customers from '../../images/freshlyy-customers.png';
import ordering from '../../images/freshlyy-ordering.png';
import admin from '../../images/freshlyy-admin.png';
import farmers from '../../images/freshlyy-farmers.png';
import webpage from '../../images/freshlyy-webpage.png';

import {
  faReact,
  faNodeJs,
  faCloudflare,
  faDigitalOcean,
  faSass,
  faPaperPlane,
} from '@fortawesome/free-brands-svg-icons';
import mysql from '../../images/mysql.svg';
import nextjs from '../../images/nextjs.svg';
import zoom from '../../images/zoom.svg';
import Image from 'next/image';
import Link from '../../components/Link';
import { far } from '@fortawesome/free-regular-svg-icons';
import Button from '../../components/Button';
import {
  faArrowUpRightFromSquare,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
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
        <title>Freshlyy</title>
      </Head>
      <motion.section
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <h1 className={styles.mainTitle}>Freshlyy - Crop Selling Platform</h1>
        <span>Updated on 26th June 2023</span>
        <p className={styles.mainDesc}>
          A crop selling platform for farmers and nearby customers.
        </p>
        <Button
          icon={faArrowUpRightFromSquare}
          class='default'
          text='View Source Code'
          handleLoading={() => {
            window.open('https://github.com/Ascendants', '_blank');
          }}
        />
        <SubHeading left>Our Team</SubHeading>
        <Image class={styles.image} src={ascendants} alt='Team Ascendants' />
        <p className={styles.imageCaption}>
          Team Ascendants, From left: Gimhani Gunasinghe, Komuthu Fernando,
          Haritha Hasathcharu, Nadun Rupasinghe and Harini Kavindya
        </p>
        <SubHeading left>Introduction</SubHeading>
        <Image
          src={webpage}
          className={styles.image}
          alt='Freshlyy Landing Page'
        />
        <p className={styles.imageCaption}>Freshlyy Landing Page</p>
        <p className={styles.description}>
          This is the second year group project we did at the University. This
          project was mentored by WSO2 LLC. This article will discuss about the
          project and the technologies used.
        </p>
        <p className={styles.description}>
          Freshlyy is a platform that facilitates small-scale household farmers
          who are living in urban areas, to sell their fresh produce at retail
          price to nearby customers.
        </p>
        <Image
          src={products}
          className={styles.imageNoOutline}
          alt='Freshlyy Pages'
        />
        <p className={styles.imageCaption}>
          Starting Page, Location Choosing Page
          <a href='#footnote'>*</a>, Product Page
          <a href='#footnote'>*</a>, and Social Corner
          <a href='#footnote'>*</a>
        </p>
        <p className={styles.description}>
          This is the initial app page. After choosing their location, Customers
          can browse products on the product page and add them to the cart.
          These products are listed by farmers who are nearby to the customer.
          Moreover, there's also a social corner where customers can view
          products by farmers they follow, view top selling products, and more.
        </p>
        <Image
          src={ordering}
          className={styles.imageNoOutline}
          alt='Freshlyy Pages'
        />
        <p className={styles.imageCaption}>
          Product Description Page, Cart Page
          <a href='#footnote'>*</a>, Checkout Page, and the Payment Page
        </p>
        <p className={styles.description}>
          After navigating to the Product Description Page, the customer can add
          the desired item to the cart and in the cart page, the customer can
          view the items they have added to the cart. After that, the customer
          can proceed to the checkout page and make the payment.
        </p>
        <Image
          src={customers}
          className={styles.imageNoOutline}
          alt='Freshlyy Pages'
        />
        <p className={styles.imageCaption}>
          Order List Page, Order Status Page, Customer Dashboard, and Card
          Management Page
        </p>
        <p className={styles.description}>
          When an order is placed, the system sends push notifications and
          emails to both customer and the farmers. The customer can view the
          status of the order on the order status page. Moreover, there is also
          the Customer Dashboard where the customer can view their orders,
          manage their cards, and manage their profile.
        </p>
        <Image
          src={farmers}
          className={styles.imageNoOutline}
          alt='Freshlyy Pages'
        />
        <p className={styles.imageCaption}>
          Adding Card Page, Farmer Dashboard Page<a href='#footnote'>*</a>,
          Farmer Earnings Page and Help Center Page
          <a href='#footnote'>*</a>
        </p>
        <p className={styles.description}>
          Here, you can see how the customers can save their cards. The farmer
          dashboard shows the farmer's earnings, and let's them manage their
          profile, view orders, and add products. The farmer can also view the
          help center page to get help. Earnings page shows the farmer's
          earnings during the period, and farmer can also withdraw their
          earnings to their bank account.
        </p>
        <Image
          src={admin}
          className={styles.image}
          alt='Freshlyy Admin Dashboard'
        />
        <p className={styles.imageCaption}>
          Administrator Dashboard
          <a href='#footnote'>*</a>
        </p>
        <p className={styles.description}>
          In the web application, there is also an administrator dashboard where
          the administrator can manage the system.
        </p>
        <br />
        <br />
        <a id='footnote' className={styles.anchor}></a>
        <h3>* Foot Note</h3>
        <p className={styles.imageCaption}>
          Pages marked with '*' are not my work. I included them to give a
          better idea of the project. Moreover, this does not include all the
          functionalities of the app, and this is just around 40%. I did not
          include the rest here because it is not my work.
        </p>
        <SubHeading left>Methodology</SubHeading>
        <div className={styles.techArea}>
          <SSkillCard icon={faReact} />
          <SSkillCard iconimage={nextjs} />
          <SSkillCard icon={faNodeJs} />
          <SSkillCard iconimage={mongo} />
          <SSkillCard iconimage={firebase} />
          <SSkillCard iconimage={stripe} />
        </div>
        <p className={styles.description}>
          The mobile app is built using React Native, and the web app is built
          using Next.js. The backend is built using Express.js and MongoDB. The
          database is hosted on MongoDB Atlas. For the push notifications, Expo
          Push Notifications is used and emails are handled by Brevo. Stripe was
          used as the payment gateway, and finally Firebase was used for
          Authentication, Image Storage, and Chat. We were able to successfully
          test the functionality of the app on both iOS and Android.
        </p>
        <Button
          icon={faArrowUpRightFromSquare}
          class='default'
          text='View Source Code'
          handleLoading={() => {
            window.open('https://github.com/Ascendants', '_blank');
          }}
        />
        <SubHeading left>Final Thoughts</SubHeading>
        <p className={styles.description}>
          We think that this project was a great success. We gained a lot of
          experience and knowledge in designing a system, and working as a team.
          We also learned a lot of new technologies. We are really grateful to
          WSO2 LLC for mentoring us throughout the project. With some slight
          improvements, we believe that this project can be launched as a
          real-world product.
        </p>
      </motion.section>
    </div>
  );
}
