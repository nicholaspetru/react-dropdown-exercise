import React, { Component } from 'react';
import SubmenuItem from './submenu_item';
import PropTypes from 'prop-types';

class Submenu extends Component {
  constructor(props) {
    super(props);
    this.buildDropdownGroup = this.buildDropdownGroup.bind(this);
  }

  buildDropdownGroup(menu) {
    return menu.map(function(menu_item) {
      return <SubmenuItem key={ menu_item.title } menuItem={ menu_item } />
    })
  }

  render() {
    return (
      <ul className="submenu_container">
        { this.buildDropdownGroup(this.props.menu) }
      </ul>
    )
  }
}

Submenu.defaultProps = {
  menu: []
};

Submenu.propTypes = {
  menu: PropTypes.array
}

export default Submenu;
