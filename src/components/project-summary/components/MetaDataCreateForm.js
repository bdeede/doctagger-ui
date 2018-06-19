import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Modal} from 'reactstrap';
import { Field } from "redux-form";

const renderField = ({input, label, placeholder, type, meta: {touched, error}}) => (
    <div className='form__form-group-input-wrap'>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && error && <span className='form__form-group-error'>{error}</span>}
    </div>
  );



class MetaDataCreateForm extends PureComponent {


    render() {
      const { visible, onCancel, onSubmit } = this.props;
      return (

        <div>
            <Modal isOpen={visible} toggle={onCancel}
                className={`modal-dialog--primary modal-dialog--header`}>

                    <div className='modal__header'>
                        <span className='lnr lnr-cross modal__close-btn' onClick={onCancel}/>
                        <span className='lnr lnr-pushpin modal__title-icon'/>
                        <h4 className='bold-text  modal__title'>Add Metadata Tag</h4>
                    </div>
                    <div className='modal__body'>
                    <form className='form form--horizontal' onSubmit={onSubmit}>
                        <div className='form__form-group'>
                                <label className='form__form-group-label'>Tag Description:</label>
                                <div className='form__form-group-field'>
                                    <Field
                                    name='description'
                                    component={renderField}
                                    type='text'
                                    placeholder='Name'
                                    />
                                </div>
                        </div>
                        </form>
                    </div>

                    <ButtonToolbar className='modal__footer'>
                        <Button onClick={onCancel}>Cancel</Button>
                        <Button color='primary' type='submit'>Add</Button>
                    </ButtonToolbar>

            </Modal>
      </div>

      );
    }
  }

  export default MetaDataCreateForm;