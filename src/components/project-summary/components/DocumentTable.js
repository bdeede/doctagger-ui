import React, {PureComponent} from 'react';
import DocumentListItem from './DocumentListItem';
import Table from '../../table/Table';
import _ from "lodash";
import { connect } from "react-redux";
import {deleteDocument} from '../../../redux/actions/docListActions'
import {ACCESS_TOKEN} from '../../../utils/constants'



class DocumentTable extends PureComponent {

  onDeleteClick(key) {
    this.props.deleteDocument(this.props.selectedFolder.folderKey, ACCESS_TOKEN, key);
  }



  renderRows() {
    return _.map(this.props.documents, doc => {
      return (
        <DocumentListItem key={doc.key}
          handleDelete={() => this.onDeleteClick(doc.key)}
          handleShowViewModal={() => this.showViewModal()}
          dockey={doc.key}
          eTag={doc.eTag}
          lastModified={doc.lastModified}
          isFolder={_.endsWith(doc.key, '/')}
          size={_.round((doc.size / (1024 * 1024)), 2)} />
      );
    });
  }

  render() {
    return (
      <div className='inbox__content'>
        <Table className='table--bordered inbox__emails-table' responsive>
          <thead>
            <tr>
              <th></th>
            <th>
              Name
            </th>
            <th>
              Last Modified
            </th>
            <th>
              Size (Mb)
            </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.renderRows()}
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps({documents, selectedFolder}) {
  return {documents, selectedFolder};
}

export default connect(mapStateToProps, {deleteDocument})(DocumentTable);