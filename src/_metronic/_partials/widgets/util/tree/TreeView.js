import React, { Component } from "react";
import ReactDOM from "react-dom";

import Tree from "rc-tree";
import assign from "object-assign";
import Tooltip from "rc-tooltip";

class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeDatas: props.treeDatas,
      selectedNodes: props.selectedNodes,
      hasContextMenus: false,
      contextMenus: props.contextMenus,
      expandedNodes: [],
    };
  }

  componentDidUpdate() {
    if (this.state.treeDatas !== this.props.treeDatas) {
      let treeDatas = this.props.treeDatas;
      let expandedNodes = [];

      for (let i = 0; i < treeDatas.length; i++) {
        let nodeObj = treeDatas[i];

        if (expandedNodes.indexOf(nodeObj.key) < 0) {
          expandedNodes.push(nodeObj.key);
        }
        if (nodeObj.children && nodeObj.children.length > 0) {
          for (let c = 0; c < nodeObj.children.length; c++) {
            let childNode = nodeObj.children[c];
            if (expandedNodes.indexOf(childNode.key) < 0) {
              expandedNodes.push(childNode.key);
            }
          }
        }
      }

      this.setState({
        treeDatas,
        expandedNodes,
      });
    }
    if (this.state.selectedNodes !== this.props.selectedNodes) {
      this.setState({
        selectedNodes: this.props.selectedNodes,
      });
    }
    if (this.state.contextMenus !== this.props.contextMenus) {
      this.setState({
        contextMenus: this.props.contextMenus,
      });
    }
  }

  getContainer() {
    if (!this.cmContainer) {
      this.cmContainer = document.createElement("div");
      document.body.appendChild(this.cmContainer);
    }
    return this.cmContainer;
  }

  _onRightClick = (info) => {
    if (this.state.contextMenus && this.state.contextMenus.length > 0) {
      if (this.toolTip) {
        ReactDOM.unmountComponentAtNode(this.cmContainer);
        this.toolTip = null;
      }

      let menuItems = this.state.contextMenus;
      let menuRenderViews = [];
      let tooltipVisible = true;

      for (let i = 0; i < menuItems.length; i++) {
        let menuObj = menuItems[i];

        menuRenderViews.push(
          <div
            key={"cm_" + info.node.key + "_item_" + menuObj.key}
            className="react-contextmenu-item"
            role="menuitem"
            aria-disabled="false"
            onClick={() => {
              this.props.onContextMenuClick(info.node.key, menuObj.key);
              tooltipVisible = false;
            }}
          >
            <i className={"m-nav__link-icon " + menuObj.iconClassName}></i>
            <span className="m-nav__link-text">{menuObj.text}</span>
          </div>
        );
      }

      this.toolTip = (
        <Tooltip
          trigger="click"
          defaultVisible
          visible={tooltipVisible}
          placement="bottomRight"
          prefixCls="react-contextmenu"
          overlay={menuRenderViews}
          destroyTooltipOnHide={true}
        >
          <span></span>
        </Tooltip>
      );
      const container = this.getContainer();
      assign(this.cmContainer.style, {
        position: "absolute",
        left: `${info.event.pageX}px`,
        top: `${info.event.pageY}px`,
      });

      ReactDOM.render(this.toolTip, container);

      let selectedNodes = [];
      selectedNodes.push(info.node.key);
      this.props.onSelect(selectedNodes);
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        {this.state.treeDatas && this.state.treeDatas.length > 0 && (
          <Tree
            onRightClick={this._onRightClick}
            showIcon={false}
            showLine={true}
            treeData={this.state.treeDatas}
            defaultExpandedKeys={this.state.expandedNodes}
            selectedKeys={this.state.selectedNodes}
            autoExpandParent
            onSelect={this.props.onSelect}
          />
        )}
      </div>
    );
  }
}

TreeView.displayName = "ReactTreeView";

/**
 * Define defaultProps for this component
 */
TreeView.defaultProps = {
  id: "rc_tree_view",
  treeDatas: [],
  selectedNodes: [],
  contextMenus: [],
  onSelect: () => {},
  onContextMenuClick: () => {},
};

export default TreeView;
