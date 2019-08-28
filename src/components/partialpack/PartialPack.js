import React, {Component} from 'react';
import logoBrand from '../../assets/img/logo-brand.png';
import {withRouter, Link} from 'react-router-dom';
import { IoIosArrowForward, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ReactComponent as Chevron} from '../../assets/icons/chevron-right.svg';
import PriceCal from './../priceCalu/PriceCal'
import './PartialPack.css';


export class PartialPacking extends Component {
  render() {
    return (
        <div>
        <div className="list-item-pack">
          <h2>PARTIAL PACK</h2>
          <Chevron className="arrow-icon-pack"></Chevron>
          <PriceCal bestPrice="Y" price="1223"></PriceCal>
          <div>4 Movers</div>
          <div>3 Hours</div>
          <hr></hr>
          <div><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>Included all boxes & tapes</span></div>
          <div><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>We will doall packing</span></div>
          <div><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>quit pad wrap to all your furiture</span></div>
        </div>
        <div className="list-item-pack">
          <h2>FULL PACK</h2>
          <Chevron className="arrow-icon-pack"></Chevron>
          <PriceCal bestPrice="N" price="2123"></PriceCal>
          <div>6 Movers</div>
          <div>4 Hours</div>
          <hr></hr>
          <div><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>Included all boxes & tapes</span></div>
          <div><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>We will doall packing</span></div>
          <div><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>quit pad wrap to all your furiture</span></div>
        </div>
        <div className="list-item-pack">
          <h2>I'LL PACK MYSELF</h2>
          <Chevron className="arrow-icon-pack"></Chevron>
          <PriceCal bestPrice="N" price="1234"></PriceCal>
          <div>2 Movers</div>
          <div>2 Hours</div>
        </div>
        <div className="list-item-pack">
          <h2>CUSTOMIZE</h2>
          <Chevron className="arrow-icon-pack customize"></Chevron>
        </div>
     
        </div>
    );
  }
}

export default withRouter(PartialPacking);