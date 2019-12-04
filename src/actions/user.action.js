import userAPI from '../api/product.api';
import * as types from '../constants/user.constants';

const _endpoint = "data-products";

export const createUser = formValues => async dispatch => {
  const response = await userAPI.post(`/${_endpoint}`, formValues);

  dispatch({
    type: types.CREATE_PRODUCT,
    payload: response.data
  })
}

export const fetchUsers = () => async dispatch => {
  const response = await userAPI.get(`/${_endpoint}`);

  dispatch({
    type: types.FETCH_PRODUCTS,
    payload: response.data
  })
}