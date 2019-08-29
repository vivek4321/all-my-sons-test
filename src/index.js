import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import App from './App';
import NotFound from './components/error/NotFound';
import PackDetails from './components/packDetails/PackDetails';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import PriceStore from './stores/pricestore/priceStore';

const routing = (
  <Provider store={PriceStore()}>
    <BrowserRouter>
      <Switch>
        <Route path="/packing-details" component={PackDetails} />
        <Route path="/" component={App} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
