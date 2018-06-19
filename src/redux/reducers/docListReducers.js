import _ from "lodash";
import {
  LOAD_DOCUMENTS,
  DELETE_DOCUMENT,
  FETCH_DOCUMENT
} from '../actions/docListActions';



export default function (state = {}, action) {
  switch (action.type) {
    case LOAD_DOCUMENTS:
      return _.mapKeys(action.payload.data, 'key');
    case FETCH_DOCUMENT:
      const updatedItems = [...state.items];
      updatedItems[action.index] = action.data;
      return {...state, items: updatedItems};
    case DELETE_DOCUMENT:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}