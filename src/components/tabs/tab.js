import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
class Tab extends Component {

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
      },
    } = this;

    let className = `tab-list-item ${this.props.label}`;
 
    if (activeTab === label) { 

      className += ' tab-list-active';
    }
    console.log(this.props)
    return (


      <div
        key={label}
        className={className}
        onClick={onClick}
      >
        {label}
      </div>

    
    );
  }
}

export default Tab;