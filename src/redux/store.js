import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root';

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
  if(devTools)
    enhancers.push(devTools());
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    ...enhancers
  )
);
