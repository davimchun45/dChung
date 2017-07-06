import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom'
import Education_Style from './Education.css'

export default class Education extends React.Component {

  render() {
    return (
      <div className={'container-fluid'}>
          <h1> Education </h1>
          <li className={Education_Style.crossout}> University of Minnesota - Twin Cities </li>
          <li className={Education_Style.crossout}> Bachelors Degree in Computer Science </li>
          <li className={Education_Style.crossout}> Expected Graduation Date 2019 </li>
          <li> Expected Dropout Date 2019 </li>
          <div className={Education_Style.icons}>
            <i className="fa fa-graduation-cap fa-5x" aria-hidden="true"></i>
          </div>
          <Link to='/'><i className="fa fa-angle-left fa-5x" aria-hidden="true"></i></Link>
          <Link to='/hobbies'><i className="fa fa-angle-right fa-5x" aria-hidden="true"></i></Link>
      </div>
    );
  }
}
