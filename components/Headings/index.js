import React from 'react';
import style from './style.module.scss';

module.exports.SubHeading = function (props) {
  let align = 'center';
  if (props.left == true) {
    align = 'left';
  }
  if (props.right == true) {
    align = 'right';
  }
  return (
    <h2 className={style.subHeading} style={{ textAlign: align }}>
      {props.children}
    </h2>
  );
};
module.exports.PropHeading = function (props) {
  return (
    <span className={style.propHeading}>
      <h3 className={style.propHeadingTitle}>{props.title}</h3>
      <h3>&nbsp;:&nbsp;</h3>
      <h3>{props.type}</h3>
    </span>
  );
};
module.exports.SubHeading2 = function (props) {
  return <h2 className={style.subHeading2}>{props.children}</h2>;
};
