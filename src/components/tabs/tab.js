import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,

  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
    
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        position,
      },
    } = this;
 
    let className = 'tab-list-item';
 

    if (activeTab === label) { 
      className += ' tab-list-active';
    }else{
      className +=' position2'
    }

    return (
      <div
        className={className}
        onClick={onClick}
      >
        {label}
      </div>
    );
  }
}

export default Tab;