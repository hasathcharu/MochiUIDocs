import React from 'react';
import styles from './style.module.scss';

export default function (props) {
  return (
    <a className={styles.link} {...props}>
      {props.children}
    </a>
  );
}
