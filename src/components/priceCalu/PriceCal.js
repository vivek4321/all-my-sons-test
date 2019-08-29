import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PriceCal.css'

export class PriceCal extends Component {
  render() {
    return (
      <div className="price-cal">
        <div className={(this.props.bestPrice == 'Y') ? 'best-value' : 'display-none'}><i>Best Price</i></div>
        <div className="dollor-amount">$ {this.props.price}</div>
        <div className="add-hour">*$150 for each additional hour </div>
      </div>
    );
  }
}

export default withRouter(PriceCal);