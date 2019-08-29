import React from 'react';
import { withRouter } from 'react-router';
import { Header } from '../header/Header';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PartialPacking from '../partialpack/PartialPack';
import Calender from '../Calender/Calender';
function PackDetails() {
  return (
    <div>
      <Header></Header>
      <ProgressBar variant="info" now={60} />
      <Calender></Calender>
      <PartialPacking></PartialPacking>
    </div>
  );
}

export default withRouter(PackDetails);
