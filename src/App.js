import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Index from './scenes/Index';
import MerchantList from './scenes/Merchant/List';
import MerchantEdit from './scenes/Merchant/Edit';
import MerchantAddNew from './scenes/Merchant/AddNew';
import MerchantSingle from './scenes/Merchant/Single';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Switch>
            {<Route path='/' exact
              component={Index}
              />}
            <Route path='/merchants' exact
              component={MerchantList}
              />
            <Route path='/merchants/add' exact
              component={MerchantAddNew}
              />
            <Route path='/merchants/:id' exact
              component={MerchantSingle}
              />
            <Route path='/merchants/:id/edit' exact
              component={MerchantEdit}
              />
            <Route path='/merchants/:id/bids' exact
              component={MerchantSingle}
              />
            <Route path='/merchants/:id/bids/add' exact
              component={MerchantSingle}
              />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
