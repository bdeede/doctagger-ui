import {doGet, doPost, doDelete, doPostWithoutCallBack} from '../../utils/apiRequest';

export const LOAD_DOC_METADATA = 'LOAD_DOC_METADATA';
export const DELETE_DOC_METADATA = 'DELETE_DOC_METADATA';
export const ADD_DOC_METADATA = 'ADD_DOC_METADATA';


const DOC_METADATA_PATH = '/documentmetadata/';


export function loadDocMetadata(accessToken, documentKey) {
  const requestPath = `${DOC_METADATA_PATH}${encodeURIComponent(encodeURIComponent(documentKey))}`;
  const request = doGet(accessToken, requestPath);
  return {
    type: LOAD_DOC_METADATA,
    payload:request
  };
}


export function addDocMetadata(docMetadata, accessToken) {
  const requestPath = DOC_METADATA_PATH;
  const request = doPostWithoutCallBack(accessToken, requestPath,docMetadata )
  return {
    type: ADD_DOC_METADATA,
    payload:request
  };
}

export function deleteDocMetadata(documentMetadataId, accessToken) {
  const requestPath = `${DOC_METADATA_PATH}${documentMetadataId}`;
  doDelete(accessToken, requestPath);
  return {
    type: DELETE_DOC_METADATA,
    payload:documentMetadataId
  };
}
