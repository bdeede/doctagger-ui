import React, {PureComponent} from 'react';
import SidebarLink from './SidebarLink';
import {connect} from 'react-redux';

class SidebarContent extends PureComponent {

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title='Document Store' icon='home' route='/' onClick={this.hideSidebar}/>


        </ul>

      </div>
    )
  }
}

export default connect()(SidebarContent);