import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { store } from './redux/store';

import { fetch } from './redux/merchants/actions';
window.fetchSingle = (id)=>fetch(id)(store.dispatch, store.getState);


ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
      <App />
  	</BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
