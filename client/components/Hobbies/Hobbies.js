import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom'
import hobbies_style from './Hobbies.css';

export default class Hobbies extends React.Component {

  render() {
    return (
      <div className={'container-fluid'}>
          <h1>  Hobbies  </h1>
          <li> Video Games </li>
          <li> Doing Nothing </li>
          <li> Web Development </li>
          <li> Computer Programming </li>
          <div className={hobbies_style.icons}>
            <a href='https://www.linkedin.com/in/david-chung-75544210b/'><i className="fa fa-linkedin-square fa-5x"></i></a>
            <a href='https://github.com/davimchun45'><i className="fa fa-github fa-5x"></i></a>
            <a href='https://OpenHause.xyz'><i className="fa fa-home fa-5x"></i></a>
          </div>
          <Link to='/education'><i className="fa fa-angle-left fa-5x" aria-hidden="true"></i></Link>
          <Link to='/'><i className="fa fa-angle-right fa-5x" aria-hidden="true"></i></Link>
      </div>
    );
  }
}
