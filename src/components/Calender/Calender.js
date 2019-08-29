import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MoveDay from './MoveDay';


export class Calender extends Component {
    constructor(props) {
        var currDate = new Date();
        super(props);
        this.state = {
            some: '',
            datesList: [
                currDate
            ]
        };
    }

    componentDidMount() {
        this.addNextFiveDays();
        this.addPreviousFiveDays();
    }

    addNextDay() {
        this.setState((prevState, props) => ({
            datesList: [...prevState.datesList, new Date().setDate(new Date(prevState.datesList[prevState.datesList.length - 1]).getDate() + 1)]
        }));
    }

    addPreviousDay() {
        this.setState((prevState, props) => ({
            datesList: [new Date().setDate(new Date(prevState.datesList[0]).getDate() - 1), ...prevState.datesList]
        }));
    }

    addNextFiveDays() {
        this.addNextDay();
        this.addNextDay();
        this.addNextDay();
        this.addNextDay();

    }
    addPreviousFiveDays() {
        this.addPreviousDay();
        this.addPreviousDay();
        this.addPreviousDay();
        this.addPreviousDay();
        this.addPreviousDay();
        this.addPreviousDay();
    }

    render() {
        return (
            <div className="container">
                {this.state.datesList.map((item, key) =>
                    <MoveDay showDate={item} key={key} />
                )}
            </div>
        );
    }
}

export default withRouter(Calender);