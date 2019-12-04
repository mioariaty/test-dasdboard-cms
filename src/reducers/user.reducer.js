import * as types from '../constants/user.constants';
import _ from 'lodash';

const _initState = {}

export default (state = _initState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {...state, ..._.mapKeys(action.payload, "id")}
    
    case types.CREATE_PRODUCT:
      const createState = {...state};
      createState[action.payload.id] = action.payload;
      return createState;   

    default:
      return state;
  }
}