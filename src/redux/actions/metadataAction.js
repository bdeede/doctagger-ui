import {doGet, doPost, doDelete, doPostWithoutCallBack} from '../../utils/apiRequest';

export const LOAD_METADATA_TAGS = 'LOAD_METADATA_TAGS';
export const DELETE_METADATA_TAG = 'DELETE_METADATA_TAG';
export const ADD_METADATA_TAG = 'ADD_METADATA_TAG';


const METADATA_PATH = '/metadatatag/';


export function loadMetaDataTags(accessToken) {
  const requestPath = METADATA_PATH;
  const request = doGet(accessToken, requestPath);
  return {
    type: LOAD_METADATA_TAGS,
    payload:request
  };
}


export function addMetaDataTag(metaDataTag, accessToken) {
  const requestPath = METADATA_PATH;
  const request = doPostWithoutCallBack(accessToken, requestPath,metaDataTag )
  return {
    type: ADD_METADATA_TAG,
    payload:request
  };
}

export function deleteMetaDataTag(metaDataTagId, accessToken) {
  const requestPath = `${METADATA_PATH}${metaDataTagId}`;
  doDelete(accessToken, requestPath);
  return {
    type: DELETE_METADATA_TAG,
    payload:metaDataTagId
  };
}
