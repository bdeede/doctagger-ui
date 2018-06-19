export const CHANGE_SELECTED_FOLDER = 'CHANGE_SELECTED_FOLDER';

export function changeSelectedFolder(folderKey) {
  return {
    type: CHANGE_SELECTED_FOLDER,
    payload: folderKey
  };
}