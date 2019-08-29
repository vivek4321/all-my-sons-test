import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Calender.css';
import { PriceAction } from './../../stores/pricestore/priceAction';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  PriceAction: (data) => dispatch(PriceAction(data))
})

const mapStateToProps = state => ({
  ...state
})

export class MoveDay extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.pkey)
    this.state = {
      date: new Date(this.props.showDate)
    }
    this.getPrice = this.getPrice.bind(this);
    console.log(new Date(this.props.showDate).getDay());
  }

  getPrice = (event) => {
    this.props.PriceAction({
      partialPrice: Math.floor(Math.random() * 1000),
      fullPrice: Math.floor(Math.random() * 1000),
      myPrice: Math.floor(Math.random() * 1000),
      id: new Date(this.props.showDate).getUTCDate(),
      selected : this.props.pkey
    });
  }

  render() {
    let date = new Date(this.props.showDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

    return (
      <div onClick={this.getPrice} className={'move-day-item ' 
      + (date < new Date() ? 'background-color-grey ' : 'background-color-orange ')
      + ( this.props.pkey == this.props.PriceReducer.result.selected ? 'todayDate' : '')}>

        <span className={(date < new Date() ? 'orange-dot' : 'green-dot')}></span>
        <div className="item-day">{weekDays[date.getDay()]}</div>
        <div className="item-date">{date.getDate()}</div>
        <div className="item-month">{monthNames[date.getMonth()].toString().toUpperCase()}</div>
        <div className={(date < new Date() ? 'display-none' : 'best-prize')}>Best Price</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveDay);