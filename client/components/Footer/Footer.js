import React, {PropTypes} from 'react';
import footer_style from '../Footer/Footer.css';

export default class Footer extends React.Component {

  render() {
    return (
      <footer className={footer_style.a}>
        <a href='http://www.davidchung.xyz'>David Chung 2017</a>
      </footer>
    );
  }
}
