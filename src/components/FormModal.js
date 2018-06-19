import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonToolbar, Modal} from 'reactstrap';

export default class FormModalComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    modalBody: PropTypes.string,
    okText: PropTypes.string,
    message: PropTypes.string,
    color: PropTypes.string.isRequired,
    colored: PropTypes.bool,
    header: PropTypes.bool,
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
  };

  constructor(props) {
    super(props);

  }


  render() {
    let Icon;

    switch (this.props.color) {
      case 'primary':
        Icon = <span className='lnr lnr-pushpin modal__title-icon'/>;
        break;
      case 'success':
        Icon = <span className='lnr lnr-thumbs-up modal__title-icon'/>;
        break;
      case 'warning':
        Icon = <span className='lnr lnr-flag modal__title-icon'/>;
        break;
      case 'danger':
        Icon = <span className='lnr lnr-cross-circle modal__title-icon'/>;
        break;
      default:
        break;
    }

    return (
      <div>
        <Modal isOpen={this.props.visible} toggle={this.props.onCancel}
               className={`modal-dialog--${this.props.color} ${this.props.colored ? 'modal-dialog--colored' : ''} ${this.props.header ? 'modal-dialog--header' : ''}`}>
          <div className='modal__header'>
            <span className='lnr lnr-cross modal__close-btn' onClick={this.onCancel}/>
            {this.props.header ? '' : Icon}
            <h4 className='bold-text  modal__title'>{this.props.title}</h4>
          </div>
          <div className='modal__body'>
            {this.props.modalBody}
          </div>
          <ButtonToolbar className='modal__footer'>
            <Button onClick={this.props.onCancel}>Cancel</Button>
            <Button color={this.props.color} type='submit'>{this.props.okText}</Button>
          </ButtonToolbar>
        </Modal>
      </div>
    );
  }
}