import React, {PureComponent} from 'react';
import {Col, Container, Row, Card, CardBody} from 'reactstrap';
import Documents from './components/Documents';
import MetaDatas from './components/Metadatas'
import { connect } from "react-redux";
import {loadDocuments} from '../../redux/actions/docListActions';
import {loadMetaDataTags} from '../../redux/actions/metadataAction';
import {changeSelectedFolder} from '../../redux/actions/selectedFolderAction'
import {ACCESS_TOKEN, INITIAL_FOLDER} from '../../utils/constants'
class DocumentBrowser extends PureComponent {

  componentDidMount(){
      this.props.loadDocuments(INITIAL_FOLDER, ACCESS_TOKEN);
      this.props.changeSelectedFolder(INITIAL_FOLDER);
      this.props.loadMetaDataTags(ACCESS_TOKEN);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Document Manager</h3>
            <h3 className='page-subhead subhead'>Just a subtext</h3>
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={8}>
            <Card>
              <CardBody>
                <div className='card__title'>
                  <h5 className='bold-text'>Documents</h5>
                </div>
                <Documents/>
              </CardBody>
            </Card>

          </Col>
          <Col md={4} lg={4}>
            <Row>
              <Col md={12} lg={12}>
                <Card>
                  <CardBody>
                    <div className='card__title'>
                      <h5 className='bold-text'>Metadata Tags</h5>
                    </div>
                    <MetaDatas/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <Card>
                  <CardBody>
                    <div className='card__title'>
                      <h5 className='bold-text'>Frequent Used Metadata Tags</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

    )
  }
}

function mapStateToProps({ selectedFolder}) {
  return { selectedFolder };
}



export default connect(mapStateToProps, { loadDocuments , changeSelectedFolder, loadMetaDataTags})(DocumentBrowser);