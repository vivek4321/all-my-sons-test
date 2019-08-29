import React, { Component } from 'react';
import './Body.css';
import { withRouter } from 'react-router-dom';
var images = require.context('../../assets/', true);

export class MoveSize extends Component {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this)
    }
    onItemClick(e) {
        this.props.history.push('/packing-details');
    }
    render() {
        let img_src = images(`./img/${this.props.item.icon}.png`)
        return (
            <div className="list-item" onClick={this.onItemClick} >
                <img src={img_src} className="list-icon" alt="logo" />
                <div className="list-title">{this.props.item.name}</div>
            </div>
        );
    }
}

export default withRouter(MoveSize);