import { combineReducers } from 'redux';
import { MERCHANTS, MERCHANTS_DESTROY_TEMP } from './constants';
import reduxCrud from 'redux-crud';

const AT = reduxCrud.actionTypesFor(MERCHANTS);
const initialTemp = {};
const initialError = null;

function temp(state=initialTemp, action) {
  switch (action.type) {
    case AT.MERCHANTS_CREATE_START:
      return {
        ...action.record,
        __created: false
      };

    case AT.MERCHANTS_CREATE_SUCCESS:
      return {
        ...action.record,
        __created: true
      };

    case AT.MERCHANTS_UPDATE_START:
      return {
        ...action.record,
        __updated: false
      };

    case AT.MERCHANTS_UPDATE_SUCCESS:
      return {
        ...action.record,
        __updated: true
      };

    case AT.MERCHANTS_DELETE_START:
      return {
        ...action.record,
        __deleted: false
      };

    case AT.MERCHANTS_DELETE_SUCCESS:
      return {
        ...action.record,
        __deleted: true
      };

    case MERCHANTS_DESTROY_TEMP:
      return initialTemp;

    default:
      return initialTemp;
  }
}

function error(state=initialError, action) {
  switch(action.type) {
    case AT.MERCHANTS_FETCH_ERROR:
    case AT.MERCHANTS_DELETE_ERROR:
    case AT.MERCHANTS_UPDATE_ERROR:
    case AT.MERCHANTS_CREATE_ERROR:
      return action.error;

    default:
      return state;
  }
}

export default combineReducers({
  error,
  temp,
  collection: reduxCrud.List.reducersFor(MERCHANTS)
});
