import React, { Component } from 'react';
import logoBrand from '../../assets/img/logo-brand.png';
import './Header.css';
// import { FaAngleLeft } from 'react-icons/fa';
// import { FaPhone } from 'react-icons/fa';
import { withRouter, Link } from 'react-router-dom';
// import { IoIosArrowBack} from "react-icons/io";
const images = require.context('../../assets/', true);

export class Header extends Component {
  render() {
    let callus = images(`./img/callus.png`);
    let leftar = images(`./img/leftarr.png`);
    return (
      <div className="nav-bar">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
          <img src={leftar} className="fa-angle-left" alt="logo" />
        </Link>
        <img src={logoBrand} className="all-sons-logo" alt="logo" />
        <img src={callus} className="fa-phone-right" alt="logo" />
      </div>
    );
  }
}

export default withRouter(Header);