import { MERCHANTS, MERCHANTS_DESTROY_TEMP } from './constants';
import reduxCrud from 'redux-crud';
import axios from 'axios';
import cuid from 'cuid';

const action = reduxCrud.actionCreatorsFor(MERCHANTS);
const baseurl = 'http://localhost:3030';
const url = `${baseurl}/merchants`;

export function fetch(id) {
    return (dispatch, getState) => {
      axios({url: `${url}/${id}`})
        .then(res => {
          dispatch(action.fetchSuccess(res.data))
        })
        .catch(err => {
          dispatch(action.fetchError(err))
        });

      return dispatch(action.fetchStart());
    };
}

export function fetchAll() {
    return (dispatch, getState) => {
      axios({url})
        .then(res => {
          dispatch(action.fetchSuccess(res.data))
        })
        .catch(err => {
          dispatch(action.fetchError(err))
        });

      return dispatch(action.fetchStart());
    };
}

export function create(model) {
    return (dispatch, getState) => {
      const cid = cuid();
      const local = {...model, id: cid};
      axios({
          url,
          method: "POST",
          data: model
        })
        .then(res => {
          dispatch(action.createSuccess(res.data, cid))
        })
        .catch(err => {
          dispatch(action.createError(err, local))
        });

      return dispatch(action.createStart(local));
    };
}

export function update(model) {
    return (dispatch, getState) => {
      axios({
          url: `${url}/${model.id}`,
          method: "PUT",
          data: model
        })
        .then(res => {
          dispatch(action.updateSuccess(res.data))
        })
        .catch(err => {
          dispatch(action.updateError(err, model))
        });

      return dispatch(action.updateStart(model));
    };
}

export function remove(model) {
    return (dispatch, getState) => {
      axios({
          url: `${url}/${model.id}`,
          method: "DELETE"
        })
        .then(res => {
          dispatch(action.deleteSuccess(res.data))
        })
        .catch(err => {
          dispatch(action.deleteError(err, model))
        });

      return dispatch(action.deleteStart(model));
    };
}

export function resetSingle() {
  return {
    type: MERCHANTS_DESTROY_TEMP
  }
}
