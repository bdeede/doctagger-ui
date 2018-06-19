import {doGet, doPostFile, doDelete} from '../../utils/apiRequest';

export const LOAD_DOCUMENTS = 'LOAD_DOCUMENTS';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const FETCH_DOCUMENT = 'FETCH DOCUMENT';
export const UPLOAD_DOCUMENT = 'UPLOAD DOCUMENT';


const FOLDERS_PATH = '/folders/';


export function loadDocuments(folder, accessToken) {
  const requestPath = `${FOLDERS_PATH}${encodeURIComponent(encodeURIComponent(folder))}/items`;
  const request = doGet(accessToken, requestPath);
  return {
    type: LOAD_DOCUMENTS,
    payload:request
  };
}


export function uploadFiles(folder, accessToken, values, callBack) {
  const requestPath = `${FOLDERS_PATH}${encodeURIComponent(encodeURIComponent(folder))}/files/uploadMuiltple`;


  const request = doPostFile(accessToken, requestPath,values, callBack );
  return {
    type: UPLOAD_DOCUMENT,
    payload:request
  };
}



export function deleteDocument(folder, accessToken, key) {

  const requestPath = `${FOLDERS_PATH}${encodeURIComponent(encodeURIComponent(folder))}/files/${encodeURIComponent(encodeURIComponent(key))}`;
  doDelete(accessToken, requestPath);
  return {
    type: DELETE_DOCUMENT,
    payload:key
  };
}
