import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tabstyle.css'
import Tab from './tab.js';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,

  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      inactiveTab1: this.props.children[1].props.label,
      inactiveTab2: this.props.children[2].props.label,
      tabsList: [],
    };
  }

  onClickTabItem = (tab) => {

    this.setState({ 
      activeTab: tab
    });
  }


  render() {

    const {
      onClickTabItem,


      props: {
        children,
        position,
      },
      state: {
        activeTab,
        inactiveTab1,
        inactiveTab2,
      }
    } = this;

    const tabs = this.props.children;
    

    return (
    <React.Fragment>
      {children.map((child) => {
        const { label } = child.props;
        

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
        
            />
          );
      

        
      })} 

        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </React.Fragment>
    );
  }
  
}


export default Tabs;