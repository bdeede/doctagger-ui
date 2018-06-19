import _ from "lodash";
import {
  LOAD_METADATA_TAGS,
  DELETE_METADATA_TAG,
  ADD_METADATA_TAG
} from '../actions/metadataAction';



export default function (state = {}, action) {
  switch (action.type) {
    case LOAD_METADATA_TAGS:
      return _.mapKeys(action.payload.data, 'id');
    case DELETE_METADATA_TAG:
      return _.omit(state, action.payload)
    case ADD_METADATA_TAG:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}