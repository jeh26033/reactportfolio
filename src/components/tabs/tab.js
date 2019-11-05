import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {

  onClick = () => {
    const { label, onClick } = this.props;
    console.log('that tickles', {onClick})
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        position,
        inactivePosition,
        style
      },
    } = this;
    console.log(this)

    let className = 'tab-list-item';
 
    if (activeTab === label) { 
      className += ' tab-list-active';
    }

    return (
      <div
        style={style}
        className={className}
        onClick={onClick}
      >
        {label}
      </div>
    );
  }
}

export default Tab;