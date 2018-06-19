import React, {PureComponent} from 'react';
import MenuIcon from 'mdi-react/MenuIcon';
import {changeSidebarVisibility, changeMobileSidebarVisibility} from '../../redux/actions/sidebarActions';
import {connect} from 'react-redux';

class TopbarSidebarButton extends PureComponent {
  
  changeSidebarVisibility = () => {
    this.props.dispatch(changeSidebarVisibility());
  };
  
  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };
  
  render() {
    return (
      <div>
        <button className='topbar__button topbar__button--desktop' onClick={this.changeSidebarVisibility}>
          <MenuIcon className='topbar__button-icon'/>
        </button>
        <button className='topbar__button topbar__button--mobile' onClick={this.changeMobileSidebarVisibility}>
          <MenuIcon className='topbar__button-icon'/>
        </button>
      </div>
    )
  }
}

export default connect(state => {
  return {sidebar: state.sidebar};
})(TopbarSidebarButton);
