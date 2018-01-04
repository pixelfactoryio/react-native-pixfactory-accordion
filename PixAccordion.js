import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import Collapsible from "react-native-collapsible";

/**
 * PixAccordion Component
 */
class PixAccordion extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    underlayColor: PropTypes.string,
    renderHeader: PropTypes.func.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    underlayColor: "rgba(0, 0, 0, 0)"
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed !== undefined ? props.collapsed : true
    };
  }

  _toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapsed !== this.state.collapsed) {
      this.setState({
        collapsed: nextProps.collapsed
      });
    }
  }

  render() {
    const {
      children,
      renderHeader,
      underlayColor,
      ...collapsibleProps
    } = this.props;
    return (
      <View>
        <TouchableHighlight
          onPress={() => this._toggleCollapsed()}
          underlayColor={underlayColor}
        >
          <View>{renderHeader()}</View>
        </TouchableHighlight>
        <Collapsible {...collapsibleProps} collapsed={this.state.collapsed}>
          {children}
        </Collapsible>
      </View>
    );
  }
}

export default PixAccordion;
