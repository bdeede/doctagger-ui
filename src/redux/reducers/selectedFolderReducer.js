import { CHANGE_SELECTED_FOLDER } from '../actions/selectedFolderAction';



export default function (state = {}, action) {
  switch (action.type) {
    case CHANGE_SELECTED_FOLDER:
      return {...state, folderKey: action.payload};;
    default:
      return state;
  }
}