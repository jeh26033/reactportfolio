import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tabstyle.css'
import Tab from './tab.js';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    console.log('state',this)
    this.state = {
      activeTab: this.props.children[2].props.label,
      list: [...this.props.children]
    };

  }

  onClickTabItem = (tab, index) => {
    Array.prototype.move = function (from, to) { 
      this.splice(to, 0, this.splice(from, 1)[0]);
    };
    let list = this.state.list;
    let activePosition= list[2];
    list.move(index, 2);
    this.setState({ 
      activeTab:tab,
    });

  }

  render() {

    const {
      onClickTabItem,
      onRemoveItem,
      props: {
        className,
        children,
        index
      },
      state: {
        activeTab,
        list
      }
    } = this;


    return (
    <React.Fragment>
      {list.map((child, index) => {
        const { label } = child.props;
          return (
              <Tab
                className={className}
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={() => this.onClickTabItem(label,index)}        
              />
          );
      })} 
        <div className="tab-content">
          {list.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            console.log('child',child)
            return child.props.children;
          })}
        </div>
      </React.Fragment>
    );
  }
  
}
export default Tabs;