import React, {PureComponent} from 'react';
import {Col, Container, Row, Card, CardBody, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import DropZoneMultiple from '../form/DropZoneMultiple';
import {uploadFiles} from '../../redux/actions/docListActions'
import { connect } from "react-redux";
import {ACCESS_TOKEN} from '../../utils/constants'



class UploadDocument extends PureComponent {
  renderFileInput(field) {
    const { meta: { touched, error } } = field;
    const errorClass = `${touched && error ? "has-danger" : ""}`;

    return (
      <DropZoneMultiple {...field.input} touched={touched} error={error} errorClass={errorClass}/>
    );
  }

  onSubmit(values) {
    this.props.uploadFiles(this.props.selectedFolder.folderKey, ACCESS_TOKEN, values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const {handleSubmit, reset} = this.props;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Upload Files</h3>
          </Col>
        </Row>
        <Row>
        <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Drop files to upload</h5>
              <h5 className='subhead'>For multiply files upload</h5>
            </div>
            <form className='form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                name='files'
                component={this.renderFileInput}
              />
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Submit</Button>
                <Button type='button' onClick={reset}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
        </Row>
      </Container>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.files || values.files.length === 0) {
    errors.files = "Please select at least one file to upload";
  }

  return errors;
}

function mapStateToProps({selectedFolder}) {
  return { selectedFolder };
}

export default reduxForm({
  validate,
  form: "UploadFilesForm"
})(connect(mapStateToProps, { uploadFiles })(UploadDocument));



