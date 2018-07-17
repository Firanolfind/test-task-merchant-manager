import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MerchantList from './scenes/Merchant/List';
import MerchantAddNew from './scenes/Merchant/AddNew';
import MerchantSingle from './scenes/Merchant/Single';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {/*<Route path='/' exact
            component={MerchantList}
            />*/}
          <Route path='/merchants' exact
            component={MerchantList}
            />
          <Route path='/merchants/add' exact
            component={MerchantAddNew}
            />
          <Route path='/merchants/:id' exact
            component={MerchantSingle}
            />
          <Route path='/merchants/:id/bids' exact
            component={MerchantSingle}
            />
          <Route path='/merchants/:id/bids/add' exact
            component={MerchantSingle}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
