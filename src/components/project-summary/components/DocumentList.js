import _ from "lodash";
import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Progress, Button} from 'reactstrap';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import AddIcon from 'mdi-react/PlusIcon';
import TooltipIcon from 'mdi-react/TooltipIcon';
import { connect } from "react-redux";


 class DocumentList extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.heads = [
  //     {
  //       key: 'key',
  //       name: 'Key',
  //       sortable: true
  //     },
  //     {
  //       key: 'lastmodified',
  //       name: 'Last Modified',
  //       sortable: true
  //     },
  //     {
  //       key: 'size',
  //       name: 'Size',
  //       sortable: true
  //     }
  //   ];

  //   this.state = {
  //     rows: this.createRows(),
  //     pageOfItems: []
  //   };
  //   this.createRows = this.createRows.bind(this);
  //   // this.getRandomDate = this.getRandomDate.bind(this);
  //   // this.onChangePage = this.onChangePage.bind(this);

  //   console.log(this.props.documents);
  // }

  // createRows = () => {
  //   let rows = [];
  //   console.log(this.props.documents);
  //   // this.props.documents.map(document => {
  //   //   rows.push({
  //   //     key: document.key,
  //   //   });
  //   // });
  //   return rows;
  // };

  renderRows() {
    return _.map(this.props.documents, doc => {
      return (
        <tr key={doc.key}>
          <td>{doc.key}</td>
          <td>{doc.lastModified}</td>
          <td>{_.round(doc.size / (1024 * 1024))}</td>
          <td>
          <span color='primary'  size='xs' onClick={this.onCompose}><DeleteForeverIcon/></span>
          <span color='primary'  size='xs' onClick={this.onCompose}><AddIcon/></span>
          <span color='primary'  size='xs' onClick={this.onCompose}><TooltipIcon/></span>
          </td>
        </tr>
      );
    });
  }

  render() {

    return (
      <Col md={12} lg={7} xl={9}>

        <Card>
          <CardBody>



      <table responsive className='table--bordered dashboard__table-crypto'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Modified</th>
            <th>Size (Mb)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>


          </CardBody>
        </Card>
      </Col>
    )
  }
}

function mapStateToProps({documents, token}) {
  return {documents,token};
}

export default connect(mapStateToProps)(DocumentList);