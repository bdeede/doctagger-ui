import React, {PureComponent} from 'react';
import Select from 'react-select';

export default class SelectComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (selectedOption) => {
    this.props.onChange(selectedOption);
  };

  render() {
    const {value, name} = this.props;

    return (
      <Select
        searchable={true}
        name={name}
        value={value}
        onChange={this.handleChange}
        options={this.props.options}
        clearable={false}
        className='form__form-group-select'
        placeholder={this.props.placeholder}
      />
    )
  }
}
