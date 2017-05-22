import React, { Component } from 'react';
import Submenu from './submenu';
import PropTypes from 'prop-types';

class SubmenuItem extends Component {

  handleSubmenu = (menuItem) => {
    if (menuItem.submenu) {
      return <Submenu menu={ menuItem.submenu } />
    }
    return null
  }

  render() {
    let { title } = this.props.menuItem
    return (
      <li>
        <div>
          <p className="item_block" onClick={ () => alert(title) }>{ title }</p>
          { this.handleSubmenu(this.props.menuItem) }
        </div>
      </li>
    )
  }
}

SubmenuItem.defaultProps = {
  menuItem: {}
};

SubmenuItem.propTypes = {
  menuItem: PropTypes.object
}

export default SubmenuItem;
