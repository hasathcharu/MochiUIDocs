import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function (props) {
  return props.icon ? (
    <FontAwesomeIcon icon={props.icon} {...props} />
  ) : (
    <div {...props}>
      <Image
        alt='icon'
        style={{
          width: '100%',
          height: '100%',
        }}
        src={props.iconimage}
      />
    </div>
  );
}
