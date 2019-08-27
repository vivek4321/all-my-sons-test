import React from 'react';
import {withRouter} from 'react-router';
import { Header } from '../header/Header';
import ProgressBar from 'react-bootstrap/ProgressBar';
function PackDetails() {
  return (
    <div>
      <Header></Header>
      <ProgressBar variant="info" now={60} />      
    </div>
  );
}

export default withRouter(PackDetails);
