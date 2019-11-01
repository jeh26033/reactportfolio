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
      tabsList: [...this.props.children],
    };
      this.handleClick = this.onClickTabItem.bind(this);
      this.changeOrder = this.onClickUpdateOrder.bind(this);
  }

  onClickTabItem = (tab) => {
    this.setState({ 
      activeTab: tab
    });
  }

  onClickUpdateOrder = (tab) => {
    this.setState(state => {
      const list = state.tabsList.map(item => item + 1);
        return {
          list,
        };
    });

  }




  render() {
    const {
      onClickTabItem,
      onClickUpdateOrder,
      props: {
        children,
        position,
      },
      state: {
        activeTab,
      }
    } = this;
    const tabs = this.props.children;
  
    // const tablist = children.map((child) => {
    //   const { label } = child.props;
      
        
    //       <Tab
    //         activeTab={activeTab}
    //         key={label}
    //         label={label}
    //         onClick={onClickTabItem}

    //       />

    //   })



    return (
    <React.Fragment>


      {this.state.tabsList.map((child) => {
        const { label } = child.props;

        return (
          <Tab
            activeTab={activeTab}
            key={label}
            label={label}
            onClick={onClickTabItem, onClickUpdateOrder}

          />
        )
      })}


        <div className="tab-content">
          {children.map((child) => {

            if (child.props.label !== activeTab) return undefined;
            
            
            return child.props.children[0];
           
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Tabs;