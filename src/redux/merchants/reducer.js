import { MERCHANTS } from './constants';
import reduxCrud from 'redux-crud';

const baseReducers = reduxCrud.List.reducersFor(MERCHANTS);

export default function reducer(state=[], action) {
  switch (action.type) {
    default: {
      return baseReducers(state, action)
    }
  }
}
