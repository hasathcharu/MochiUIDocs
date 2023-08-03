import React from 'react';
import styles from './style.module.scss';
import Prism from 'prismjs';
export default function (props) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={styles.codeContainer}>
      <div className={styles.codeTitle}>{props.Language}</div>
      <pre className={styles.code}>
        <code className={`language-${props.language}`}>{props.children}</code>
      </pre>
    </div>
  );
}
