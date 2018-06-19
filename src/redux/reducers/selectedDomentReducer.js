import { CHANGE_SELECTED_DOCUMENT_KEY } from '../actions/selectedDocumentAction';



export default function (state = {}, action) {
  switch (action.type) {
    case CHANGE_SELECTED_DOCUMENT_KEY:
      return {...state, documentKey: action.payload};;
    default:
      return state;
  }
}