import { combineReducers } from 'redux';
import * as CONST from './constants';
import reduxCrud from 'redux-crud';

const initialTemp = {};
const initialError = null;

function temp(state=initialTemp, action) {
  switch (action.type) {
    case CONST.MERCHANTS_CREATE_START:
      return {
        ...action.record,
        __created: false
      };

    case CONST.MERCHANTS_CREATE_SUCCESS:
      return {
        ...action.record,
        __created: true
      };

    case CONST.MERCHANTS_DESTROY_TEMP:
      return initialTemp;

    default:
      return state;
  }
}

function error(state=initialError, action) {
  switch(action.type) {
    case CONST.MERCHANTS_CREATE_ERROR:
      return action.error;

    case CONST.MERCHANTS_CREATE_SUCCESS:
    case CONST.MERCHANTS_DESTROY_TEMP:
      return initialError;

    default:
      return state;
  }
}

export default combineReducers({
  error,
  temp,
  list: reduxCrud.List.reducersFor(CONST.MERCHANTS)
});
