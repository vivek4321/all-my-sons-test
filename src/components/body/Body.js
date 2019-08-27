import React, {Component} from 'react';
import MoveSize from './moveSize';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Body.css';

export class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            shop: [
                {id: 1, name: '4+ BEDROOMS', icon: 'four'},
                {id: 2, name: '3 BEDROOMS',icon: 'three'},
                {id: 3, name: '2 BEDROOMS', icon: 'two'},
                {id: 4, name: 'FEWITEMS', icon: 'one'}
            ]
        }
    }
    render() {
    return (
        <div>
            <div className="move-size">MOVE SIZE</div>  
            <ProgressBar variant="info" now={30} />      
            {this.state.shop.map((item, key) =>
                <MoveSize item={item} key={item.id} />
            )}
        </div>
        );
    }
}

export default Body;