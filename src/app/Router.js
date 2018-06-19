import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import MainWrapper from './MainWrapper';

import DocumentBrowser from '../components/project-summary/DocumentBrowser';
import UploadDocument from '../components/project-summary/UploadDocument'
import DocumentMetadataView from '../components/project-summary/components/DocumentMetadataView'



const Router = () => (
  <MainWrapper>
    <main>
      <Switch>

        <div>
          <Topbar/>
          <Sidebar/>
          <div className='container__wrap'>
            <Route exact path='/' component={DocumentBrowser}/>
            <Route exact path='/uploaddocument' component={UploadDocument}/>
            <Route exact path='/documentmetadata/:docKey' component={DocumentMetadataView}/>
          </div>
        </div>
      </Switch>
    </main>
  </MainWrapper>
);







export default Router;
