import React, {PureComponent} from 'react';
import {Button} from 'reactstrap';
import UploadIcon from 'mdi-react/UploadIcon';
import FolderPlusIcon from 'mdi-react/FolderPlusIcon';
import DocumentTable from "./DocumentTable";
import { connect } from "react-redux";
import { Link } from "react-router-dom";






class Documents extends PureComponent {

  render() {
    return (
      <div className='inbox--show-mailboxes' >
        <div className='inbox__mailbox-list'>
          <Button color='secondary' className='icon' size='sm'>
            <Link to='/uploaddocument' style={{display: 'block', height: '100%'}}> <UploadIcon/>Upload New</Link>
          </Button>
          <Button color='secondary' className='icon' size='sm'><FolderPlusIcon/>Create Folder</Button>
        </div>
        <div className='inbox__container'>
                <DocumentTable />
        </div>
      </div>
    )
  }
}

function mapStateToProps({documents, token}) {
  return {documents,token};
}



export default connect(mapStateToProps)(Documents);