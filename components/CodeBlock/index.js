import React from 'react';
import styles from './style.module.scss';
import Prism from 'prismjs';
import { Button } from 'mochi-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
export default function (props) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={`${styles.codeContainer} ${props.narrow && styles.narrow}`}>
      <div className={styles.codeTitle}>
        <span>{props.Language}</span>
        <span>
          <Button
            title='Copy'
            icon={<FontAwesomeIcon icon={faCopy} />}
            size='small'
            color='secondary'
            onClick={() => {
              try {
                navigator.clipboard.writeText(props.children);
              } catch {
                console.log('Clipboard not supported');
              }
            }}
            shaded
            margin={false}
          />
        </span>
      </div>
      <pre className={styles.code}>
        <code className={` language-${props.language}`}>{props.children}</code>
      </pre>
    </div>
  );
}
