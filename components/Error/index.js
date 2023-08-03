import React from 'react';
import styles from './error.module.scss';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar3.png';
import Image from 'next/image';

export default function Error() {
  return (
    <div className={styles.error}>
      <a href='./'>
        <Image src={logo} alt='Hasathcharu Logo' className={styles.image} />
      </a>
      <Image src={avatar} alt='Haritha Hasathcharu' className={styles.avatar} />
      <h1>404 Not Found</h1>
    </div>
  );
}
