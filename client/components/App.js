import React, {PropTypes} from 'react';
import { Route } from 'react-router-dom'
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import Hobbies from './Hobbies/Hobbies.js';
import Education from './Education/Education.js';
import App_Style from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={App_Style.body}>
        <div className='row'>
          <div className={'container-fluid'}>
            <div className={'card text-center', App_Style.card}>
              <div className={'card-header', App_Style.header}> <strong> Hello City </strong> </div>
              <Route exact path='/' component={Home}/>
              <Route path='/education' component={Education}/>
              <Route path='/hobbies' component={Hobbies}/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>)
  }
}
