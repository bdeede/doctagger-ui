import _ from "lodash";
import {
  LOAD_DOC_METADATA,
  DELETE_DOC_METADATA,
  ADD_DOC_METADATA
} from '../actions/docMetadataAction';



export default function (state = {}, action) {
  switch (action.type) {
    case LOAD_DOC_METADATA:
      return _.mapKeys(action.payload.data, 'id');
    case DELETE_DOC_METADATA:
      return _.omit(state, action.payload)
    case ADD_DOC_METADATA:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}