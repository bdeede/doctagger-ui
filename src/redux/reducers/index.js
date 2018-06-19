import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';
import docListReducers from './docListReducers';
import docMetadataReducer from './docMetadataReducer';
import metaDataReducer from './metaDataReducer';
import getTokenReducer from './getTokenReducer';
import selectedFolderReducer from './selectedFolderReducer';
import selectedDocumentReducer from './selectedDomentReducer';



const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  token: getTokenReducer,
  documents: docListReducers,
  documentMetadas: docMetadataReducer,
  metadataTags: metaDataReducer,
  selectedFolder: selectedFolderReducer,
  selectedDocument: selectedDocumentReducer
});

export default rootReducer;