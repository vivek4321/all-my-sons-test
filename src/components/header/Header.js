import React, { Component } from 'react';
import logoBrand from '../../assets/img/logo-brand.png';
import './Header.css';
import { FaAngleLeft } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { withRouter, Link } from 'react-router-dom';
// import { IoIosArrowBack} from "react-icons/io";
const images = require.context('../../assets/', true);

export class Header extends Component {
  render() {
    let callus = images(`./icons/phone-call.png`);
    let leftar = images(`./icons/left-arrow.png`);
    return (
      <div className="nav-bar">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
          <img src={leftar} className="fa-angle-left" alt="logo" />
        </Link>
        {/* <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><FaAngleLeft size={70} className="fa-angle-left" ></FaAngleLeft></Link> */}
        <img src={logoBrand} className="all-sons-logo" alt="logo" />
        <img src={callus} className="fa-phone-right" alt="logo" />
        <span className="callus-text">CALL US</span>
        {/* <FaPhone size={40} className="fa-phone-right" ></FaPhone> */}
      </div>
    );
  }
}

export default withRouter(Header);