import React, {PureComponent} from 'react';
import {Button} from 'reactstrap';
import { reduxForm } from "redux-form";
import PlusIcon from 'mdi-react/PlusIcon';
import MetaDataTable from "./MetaDataTable";
import MetaDataCreateForm from './MetaDataCreateForm';
import { connect } from "react-redux";
import {addMetaDataTag} from '../../../redux/actions/metadataAction'
import {ACCESS_TOKEN, USER_ID} from '../../../utils/constants'


class MetaDatas extends PureComponent {

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
    let metaDataTag = {
      description: values.description,
      userId: USER_ID
    }
    this.props.addMetaDataTag(metaDataTag, ACCESS_TOKEN);
    this.hideModal();
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='inbox--show-mailboxes' >
        <div className='inbox__mailbox-list'>
          <Button className='icon icon--right' color='primary' size='sm' outline onClick={this.showModal}><p>Add Metadata Key <PlusIcon/></p></Button>
        </div>
        <div className='inbox__container'>
        <MetaDataTable/>
        <MetaDataCreateForm
          visible={this.state.modalvisible}
          onCancel={this.hideModal}
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        />
        </div>
      </div>
    )
  }
}

function mapStateToProps({metadataTags}) {
  return {metadataTags};
}

const validate = values => {
  const errors = {};
  if (!values.description) {
    errors.description = 'Tag Description field shouldn’t be empty';
  }

  return errors;
};

export default reduxForm({
  validate,
  form: "MetaDataTagForm"
})(connect(mapStateToProps, { addMetaDataTag })(MetaDatas));
