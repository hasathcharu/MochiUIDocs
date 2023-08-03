import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  faUserPlus,
  faRightToBracket,
  faNewspaper,
  faFileLines,
  faStar,
  faWandMagicSparkles,
  faMagicWandSparkles,
  faHeart,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

import hero from '../../images/ananda.svg';
// import Button from '../Button';
import {
  Button,
  CheckBoxGroup,
  DatePicker,
  DropDown,
  Input,
  TimePicker,
} from 'soft-inputs/dist/';
import styles from './hero.module.scss';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
export default function Hero() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [birthday, setBirthday] = React.useState(new Date());
  const [coffee, setCoffee] = React.useState('');
  const [likedFoods, setLikedFoods] = React.useState([]);
  async function dummyWait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done');
      }, 5000);
    });
  }
  const contentVariants = {
    hidden: {
      x: 0,
      y: 20,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'linear',
      },
    },
  };
  const contentH1 = JSON.parse(JSON.stringify(contentVariants));
  const contentH2 = JSON.parse(JSON.stringify(contentVariants));
  const contentP = JSON.parse(JSON.stringify(contentVariants));
  contentH2.visible.transition.delay = 0.8;
  contentP.visible.transition.delay = 1.6;
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <motion.h1 initial='hidden' variants={contentH1} animate='visible'>
          Soft Inputs
        </motion.h1>
        <motion.h2 initial='hidden' variants={contentH2} animate='visible'>
          Designed by Hasathcharu
        </motion.h2>
        <motion.div initial='hidden' variants={contentP} animate='visible'>
          <p>A simple set of React UI components to get work done.</p>
          <p>Designed using Sass, Framer, FontAwesome and more.</p>
          <Button
            title='View Documentation'
            iconRight={<FontAwesomeIcon icon={faFileLines} />}
          />
        </motion.div>
      </div>
      <div className={styles.heroImageContainer}>
        <div className={styles.box}>
          <Input
            domName='Name'
            placeholder='enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DatePicker
            domName='Birthday'
            value={birthday}
            onChange={(e) => setBirthday(e)}
          />
          <DropDown
            value={coffee}
            onChange={(i) => setCoffee(i)}
            domName='Your Favorite Coffee ☕️'
            defaultValue='-- Chooose your coffee'
            values={[
              {
                key: 'espresso',
                label: 'Espresso',
              },
              {
                key: 'cappuccino',
                label: 'Cappuccino',
              },
              {
                key: 'latte',
                label: 'Latte',
              },
              {
                key: 'mocha',
                label: 'Mocha',
              },
              {
                key: 'americano',
                label: 'Americano',
              },
              {
                key: 'flatWhite',
                label: 'Flat White',
              },
            ]}
            unSelectable
          />
          <CheckBoxGroup
            values={[
              {
                key: 'friedChicken',
                label: 'Fried Chicken 🍗',
              },
              {
                key: 'pizza',
                label: 'Pizza 🍕',
              },
              {
                key: 'dumplings',
                label: 'Dumplings 🥟',
              },
              {
                key: 'tempura',
                label: 'Tempura 🍤',
              },
            ]}
            containerClassName={styles.checkBoxGroup}
            value={likedFoods}
            onChange={(value) => setLikedFoods(value)}
            domName='What foods do you like?'
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              title='Click Me'
              icon={<FontAwesomeIcon icon={faMagicWandSparkles} />}
              onClick={dummyWait}
            />
            <Button
              color='primary'
              title='Me Too'
              shaded={true}
              iconRight={<FontAwesomeIcon icon={faBolt} />}
              onClick={dummyWait}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
