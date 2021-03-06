import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import {blocks, utils} from 'slate-plugins';
const {blockquote} = blocks;
const {isBlockquote} = utils.is;

export default class Blockquote extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  displayName = this.props.type || 'blockquote';

  static propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onClick(e) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(blockquote(state, {type: this.displayName}));
  }

  render() {
    const {state, icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={icon || 'Blockquote'}
        onClick={onClick}
        isActive={isBlockquote(state)}
        {...rest}
      />
    );
  }
}
