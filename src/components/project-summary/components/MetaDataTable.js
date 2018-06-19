import React, {PureComponent} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import Table from '../../table/Table';
import _ from "lodash";
import { connect } from "react-redux";
import {ACCESS_TOKEN} from '../../../utils/constants'

import {deleteMetaDataTag} from '../../../redux/actions/metadataAction'


class MetaDataTable extends PureComponent {

  onDeleteClick(id) {
    this.props.deleteMetaDataTag(id, ACCESS_TOKEN);
  }

  renderList() {
    return _.map(this.props.metadataTags, metadataTag => {
      return (
        <tr key={metadataTag.id}>
          <td>{metadataTag.description}</td>
          <td>
            <ButtonGroup className='btn-group--icons'>
              <Button onClick={() => this.onDeleteClick(metadataTag.id)} color='danger' outline size='sm'><span className='lnr lnr-trash'/></Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className='inbox__content'>
        <Table>
          <tbody>
            {this.renderList()}
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps({metadataTags}) {
  return {metadataTags};
}

export default connect(mapStateToProps, {deleteMetaDataTag})(MetaDataTable);