import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Modal} from 'reactstrap';
import { Field } from "redux-form";
import _ from "lodash";
import Select from '../../../components/form/Select';

const renderField = ({input, label, placeholder, type, meta: {touched, error}}) => (
    <div className='form__form-group-input-wrap'>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && error && <span className='form__form-group-error'>{error}</span>}
    </div>
  );

  const renderSelectField = ({input, meta: {touched, error}, options},) => (
    <div className='form__form-group-input-wrap form__form-group-input-wrap--error-above'>
      <Select
        {...input}
        options={options}
      />
      {touched && error && <span className='form__form-group-error'>{error}</span>}
    </div>
  );



class DocmentMetaDataCreateForm extends PureComponent {

    renderSelectOptions() {
        return _.map(this.props.metadataTags, metadataTag => {
          return (
            { value : metadataTag.id, label: metadataTag.description}
          );
        });
      }

    render() {
      const { visible, onCancel, onSubmit } = this.props;
      return (

        <div>
            <Modal isOpen={visible} toggle={onCancel}
                className={`modal-dialog--primary modal-dialog--header`}>

                    <div className='modal__header'>
                        <span className='lnr lnr-cross modal__close-btn' onClick={onCancel}/>
                        <span className='lnr lnr-pushpin modal__title-icon'/>
                        <h4 className='bold-text  modal__title'>Add Document Metadata</h4>
                    </div>
                    <div className='modal__body'>
                    <form className='form form--horizontal' onSubmit={onSubmit}>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Metadata Tag</label>
                            <div className='form__form-group-field'>
                            <Field
                                name='metadatatagid'
                                component={renderSelectField}

                                options={
                                    this.renderSelectOptions()
                                }
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                                <label className='form__form-group-label'>Value:</label>
                                <div className='form__form-group-field'>
                                    <Field
                                    name='tagvalue'
                                    component={renderField}
                                    type='text'
                                    placeholder='Name'
                                    />
                                </div>
                        </div>
                        <ButtonToolbar className='modal__footer'>
                        <Button onClick={onCancel}>Cancel</Button>
                        <Button color='primary' type='submit'>Add</Button>
                    </ButtonToolbar>
                        </form>
                    </div>



            </Modal>
      </div>

      );
    }
  }

  export default DocmentMetaDataCreateForm;