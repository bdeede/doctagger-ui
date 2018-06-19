import React, {PureComponent} from 'react';
import Select from 'react-select';

export default class MultiSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(value) {
    this.props.onChange(value);
  };
  
  render() {
    const {value, name} = this.props;
    return (
      <Select
        multi
        name={name}
        value={value}
        onChange={this.handleChange}
        options={this.props.options}
        clearable={false}
        className='form__form-group-select'
        closeOnSelect={false}
        removeSelected={false}
        placeholder={this.props.placeholder}
      />
    )
  }
}
