import React from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/router';

module.exports.SubHeading = function (props) {
  const router = useRouter();

  let align = 'center';
  if (props.left == true) {
    align = 'left';
  }
  if (props.right == true) {
    align = 'right';
  }
  return (
    <>
      {props.anchor && <a className={styles.anchor} id={props.anchor}></a>}
      <h2
        className={styles.subHeading}
        style={{ textAlign: align }}
        onClick={() => props.anchor && router.push(`#${props.anchor}`)}
      >
        {props.children}{' '}
        {props.anchor && <span className={styles.anchorHash}>#</span>}
      </h2>
    </>
  );
};
module.exports.PropHeading = function (props) {
  const router = useRouter();
  return (
    <>
      {props.anchor && <a className={styles.anchor} id={props.anchor}></a>}
      <span
        className={styles.propHeading}
        onClick={() => props.anchor && router.push(`#${props.anchor}`)}
      >
        <h3 className={styles.propHeadingTitle}>{props.title}</h3>
        <h3>&nbsp;:&nbsp;</h3>
        <h3 className={styles.type}>{props.type}</h3>{' '}
        {props.anchor && <span className={styles.anchorHash}>#</span>}
      </span>
    </>
  );
};
module.exports.SubHeading2 = function (props) {
  const router = useRouter();

  return (
    <>
      {props.anchor && <a className={styles.anchor} id={props.anchor}></a>}
      <h2
        className={styles.subHeading2}
        onClick={() => props.anchor && router.push(`#${props.anchor}`)}
      >
        {props.children}{' '}
        {props.anchor && <span className={styles.anchorHash}>#</span>}
      </h2>
    </>
  );
};
