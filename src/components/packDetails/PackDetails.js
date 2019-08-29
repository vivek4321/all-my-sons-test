import React from 'react';
import { withRouter } from 'react-router';
import { Header } from '../header/Header';
import PartialPacking from '../partialpack/PartialPack';
import Calender from '../Calender/Calender';
function PackDetails() {
  return (
    <div>
      <Header></Header>
      <Calender></Calender>
      <PartialPacking></PartialPacking>
    </div>
  );
}

export default withRouter(PackDetails);
