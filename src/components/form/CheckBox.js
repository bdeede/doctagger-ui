import React, {PureComponent} from 'react';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';

export default class CheckBox extends PureComponent {
  componentDidMount() {
    this.props.onChange(this.props.defaultChecked);
  }
  
  render() {
    const disabled = this.props.disabled;
    
    return (
      <label
        className={`checkbox-btn${disabled ? ' disabled' : ''}${this.props.class ? ` checkbox-btn--${this.props.class}` : ''}`}>
        <input className='checkbox-btn__checkbox'
               type='checkbox' name={this.props.name} onChange={this.props.onChange}
               checked={this.props.value} disabled={disabled}/>
        <span className='checkbox-btn__checkbox-custom'
              style={this.props.color ? {background: this.props.color, borderColor: this.props.color} : {}}>
            <CheckIcon/>
          </span>
        {this.props.class === 'button' ?
          <span className='checkbox-btn__label-svg'>
              <CheckIcon className='checkbox-btn__label-check'/>
              <CloseIcon className='checkbox-btn__label-uncheck'/>
            </span> : ''}
        <span className='checkbox-btn__label'>
          {this.props.label}
          </span>
      </label>
    )
  }
}
