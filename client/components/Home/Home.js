import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom'

import default_styles from '../App.css';
import home_style from './Home.css';

export default class Home extends React.Component {

//  const City = 'http://ip-api.com/json'

  render() {
    return (
      <div className={'container-fluid'}>
          <h1> David Chung </h1>
          <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <div className={'card', home_style.card}></div>
            </div>
            <div className='col'></div>
          </div>
          <Link to='/hobbies'><i className="fa fa-angle-left fa-5x" aria-hidden="true"></i></Link>
          <Link to='/education'><i className="fa fa-angle-right fa-5x" aria-hidden="true"></i></Link>
      </div>
    );
  }
}
