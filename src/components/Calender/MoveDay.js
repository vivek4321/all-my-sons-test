import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Calender.css';


export class MoveDay extends Component {
    constructor(props) {        
        super(props);
        console.log(new Date(this.props.showDate).getDay());
      }

  render() {
    let date = new Date(this.props.showDate);
    // let previousDayStyle = "";
    // if(date>new Date()){
    //     previousDayStye = "background-color-orange";
    // }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

    return (
      <div className={ 'move-day-item '+(date < new Date() ? 'background-color-grey' : 'background-color-orange') }>

        <span className={ (date < new Date() ? 'orange-dot' : 'green-dot')}></span>
        <div className="item-day">{weekDays[date.getDay()]}</div> 
        <div className="item-date">{date.getDate()}</div>
        <div className="item-month">{monthNames[date.getMonth()].toString().toUpperCase()}</div>
        <div className={ (date < new Date() ? 'display-none' : 'best-prize')}>Best Prize</div>
      </div>
    );
  }
}

export default withRouter(MoveDay);