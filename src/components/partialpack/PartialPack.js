import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ReactComponent as Chevron } from '../../assets/icons/chevron-right.svg';
import PriceCal from './../priceCalu/PriceCal'
import './PartialPack.css';
import { PriceAction } from './../../stores/pricestore/priceAction';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  PriceAction: (data) => dispatch(PriceAction(data))
})

export class PartialPacking extends Component {
  checkUndefined(priceValue) {
    if (priceValue === undefined) {
      return 0
    } else {
      return priceValue
    }
  }
  render() {
    return (
      <div>
        <div className="list-item-pack side-green-border">
          <h2 className="text-size-mobile">PARTIAL PACK</h2>
          <Chevron className="arrow-icon-pack"></Chevron>
          <PriceCal bestPrice="Y" price={this.checkUndefined(this.props.PriceReducer.result.partialPrice)}></PriceCal>
          <div>4 Movers</div>
          <div>3 Hours</div>
          <hr></hr>
          <div className="font-14"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>  Included all boxes & tapes</span></div>
          <div className="font-14"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>  We will doall packing</span></div>
          <div className="font-14"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>  quit pad wrap to all your furiture</span></div>
        </div>
        <div className="list-item-pack">
          <h2 className="text-size-mobile">FULL PACK</h2>
          <Chevron className="arrow-icon-pack"></Chevron>
          <PriceCal bestPrice="N" price={this.props.PriceReducer.result.fullPrice}></PriceCal>
          <div>6 Movers</div>
          <div>4 Hours</div>
          <hr></hr>
          <div className="font-14"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>  Included all boxes & tapes</span></div>
          <div className="font-14"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>  We will doall packing</span></div>
          <div className="font-14"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline><span>  quit pad wrap to all your furiture</span></div>
        </div>
        <div className="list-item-pack">
          <h2 className="text-size-mobile">I'LL PACK MYSELF</h2>
          <Chevron className="arrow-icon-pack"></Chevron>
          <PriceCal bestPrice="N" price={this.props.PriceReducer.result.myPrice}></PriceCal>
          <div>2 Movers</div>
          <div>2 Hours</div>
        </div>
        <div className="list-item-pack">
          <h2 className="text-size-mobile">CUSTOMIZE</h2>
          <Chevron className="arrow-icon-pack customize"></Chevron>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PartialPacking));