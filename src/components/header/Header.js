import React, {Component} from 'react';
import logoBrand from '../../assets/img/logo-brand.png';
import './Header.css';
import { FaAngleLeft } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import {withRouter, Link} from 'react-router-dom';


export class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><FaAngleLeft size={70} className="fa-angle-left" ></FaAngleLeft></Link>
          <img src={logoBrand} className="all-sons-logo" alt="logo" />
          <FaPhone size={40} className="fa-phone-right" ></FaPhone>
      </div>
    );
  }
}

export default withRouter(Header);