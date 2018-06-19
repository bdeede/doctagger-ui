export const CHANGE_SELECTED_DOCUMENT_KEY = 'CHANGE_SELECTED_DOCUMENT_KEY';

export function changeSelectedDocumentKey(dockey) {
  return {
    type: CHANGE_SELECTED_DOCUMENT_KEY,
    payload: dockey
  };
}