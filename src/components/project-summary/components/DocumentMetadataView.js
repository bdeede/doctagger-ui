import React, {PureComponent} from 'react';
import {Col, Container, Row, Card, CardBody, Button, ButtonToolbar, ButtonGroup} from 'reactstrap';
import PlusIcon from 'mdi-react/PlusIcon';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import {loadDocMetadata} from '../../../redux/actions/docMetadataAction'
import {ACCESS_TOKEN} from '../../../utils/constants'
import Table from '../../table/Table';
import _ from "lodash";
import DocmentMetaDataCreateForm from './DocmentMetaDataCreateForm'
import {addDocMetadata} from '../../../redux/actions/docMetadataAction'


class DocumentMetadataView extends PureComponent {

  state = {
    modalvisible: false,
  };
  showModal = () => {
    this.setState({ modalvisible: true });
  }
  hideModal = () => {
    this.setState({ modalvisible: false });
  }

  onSubmit(values) {
    const { docKey } = this.props.match.params;
    let docMetadata = {
      metaDataTagId: values.metadatatagid.value,
      value: values.tagvalue,
      documentKey: docKey
    }
    this.props.addDocMetadata(docMetadata, ACCESS_TOKEN);
    this.hideModal();
  }

    componentDidMount(){

        const { docKey } = this.props.match.params;
        this.props.loadDocMetadata(ACCESS_TOKEN, decodeURIComponent(docKey));
    }
    renderList() {
        const { documentMetadas } = this.props;
        return _.map(documentMetadas, documentMetadata => {
          return (
            <tr key={documentMetadata.id}>
              <td>{this.props.metadataTags[documentMetadata.metaDataTagId] && this.props.metadataTags[documentMetadata.metaDataTagId].description}</td>
              <td>{documentMetadata.value}</td>
              <td>
                <ButtonGroup className='btn-group--icons'>
                  <Button color='danger' outline size='sm'><span className='lnr lnr-trash'/></Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        });
      }

    render() {
      const { documentMetadas, handleSubmit } = this.props;

      if (!documentMetadas) {
        return <div>Loading...</div>;
      }
      return (

        <Container>
          <Row>
            <Col md={6}>
              <h3 className='page-title'>Document Metadata</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6}>
              <Card>
                <CardBody>
                  <div className='card__title'>
                    <h5 className='bold-text'>Document Metadata</h5>
                  </div>
                  <Table>
                              <tbody>
                                  {this.renderList()}
                              </tbody>
                          </Table>
                          <div className='inbox__mailbox-list'>
                              <Button className='icon icon--right' color='primary' size='sm' outline onClick={this.showModal}>Add Metadata Key <PlusIcon/></Button>

                              <ButtonGroup className='btn-group--icons'>
                                <Button outline size='sm'>
                                  <Link to='/' style={{display: 'block', height: '100%'}}>
                                    <span className='lnr lnr-arrow-left'/>
                                  </Link>
                                </Button>
                              </ButtonGroup>
                              </div>

                </CardBody>
              </Card>
            </Col>
          </Row>
          <DocmentMetaDataCreateForm
              visible={this.state.modalvisible}
              onCancel={this.hideModal}
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
              metadataTags={this.props.metadataTags}
          />
        </Container>



      );
    }
  }


function mapStateToProps({documentMetadas, metadataTags}) {
    return {documentMetadas, metadataTags};
  }

  const validate = values => {
    const errors = {};
    if (!values.metadatatagid) {
      errors.metadatatagid = 'Please select a Metadata Tag';
    }

    if (!values.tagvalue) {
      errors.tagvalue = 'Please enter value';
    }

    return errors;
  };


  export default reduxForm({
    validate,
    form: "DocumentMetaDataForm"
  })(connect(mapStateToProps, { loadDocMetadata, addDocMetadata })(DocumentMetadataView));

