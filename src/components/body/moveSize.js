import React, {Component} from 'react';
import './Body.css';
var images = require.context('../../assets/', true);
export class MoveSize extends Component {
    render() {
        let img_src = images(`./img/${this.props.item.icon}.png`)
        return (
            <div className="list-item">
                <img src={img_src} className="list-icon" alt="logo" />    
                <div className="list-title">{this.props.item.name}</div>
            </div>
        );
}
}

export default MoveSize;