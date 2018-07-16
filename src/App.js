import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <Header />
          <Menu />
        <Main />
        <div>
          <Switch>
            <Route path='/'              component={Merchant_List} exact/>
            <Route path='/merchants'     component={Merchant_List} exact/>
              <Loading />
              <Empty />
              <List />
                <ul>
                  <Merchant_Row />
                  <Merchant_Row />
                  <Merchant_Row />
                </ul>
            <Route path='/merchants/add' component={Merchant_AddNew} exact/>
              <form>
                <input name="firstname" type="text" />
                <input name="lastname" type="text" />
                <input name="avatarUrl" type="text" />
                <input name="email" type="text" />
                <input name="phone" type="text" />
                <button type="reset">Cancel</button>
                <button type="submit">Create</button>
              </form>
            <Route path='/merchants/:id' component={Merchant_Single} exact/>
              <form>
                <input name="id" type="hidden" />
                <input name="firstname" type="text" />
                <input name="lastname" type="text" />
                <input name="avatarUrl" type="text" />
                <input name="email" type="text" />
                <input name="phone" type="text" />
                <input name="hasPremium" type="checkbox" />
                <button type="button">Delete</button>
                <button type="button">Edit</button>
                <button type="reset">Cancel</button>
                <button type="submit">Save</button>
              </form>
            <Route path='/merchants/:id/bids' component={Merchant_Single} exact/>
              <Loading />
              <Empty />
              <List />
                <ul>
                  <Bids_Row />
                  <Bids_Row />
                  <Bids_Row />
                </ul>
            <Route path='/merchants/:id/bids/add' component={Merchant_Single} exact/>
              <form>
                <input name="carTitle" type="text" />
                <input name="amount" type="number" />
                <button type="reset">Cancel</button>
                <button type="submit">Create</button>
              </form>
          </Switch>
        </div>
      </div>
    );
  }
}

{
/*{
  merchants: [],
  single_merchant: {
    id: string,
    firstname: string,
    lastname: string,
    avatarUrl: string,
    email: string,
    phone: string,
    hasPremium: boolean,
    bids: Array<Bid>
  },
  bids: [],
  single_bid: {
    id: string,
    carTitle: string,
    amount: number,
    created: string
  },

}*/
}

{
/*
Bid {
  id: string,
  carTitle: string,
  amount: number,
  created: string
}

Merchant {
  id: string,
  firstname: string,
  lastname: string,
  avatarUrl: string,
  email: string,
  phone: string,
  hasPremium: boolean,
  bids: Array<Bid>
}*/
}

export default App;
