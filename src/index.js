import React from 'react';

class Range extends React.Component {
  onRangeChange(e) {
    e.persist();
    this.props.onMouseMove(e);
    if (e.buttons !== 1 && e.which !== 1) return;
    this.props.onChange(e);
  }
  onRangeClick(e) {
    this.props.onClick(e);
    this.props.onChange(e);
  }
  onRangeKeyDown(e) {
    this.props.onKeyDown(e);
    this.props.onChange(e);
  }
  render() {
    let inputClass = this.props.className.concat(' input-range');
    return (
      <input
        className={inputClass}
        type="range"
        onChange={this.props.onChange.bind(this)}
        onClick={this.props.onClick.bind(this)}
        onKeyDown={this.props.onKeyDown.bind(this)}
        onMouseMove={this.props.onMouseMove.bind(this)}
        max={this.props.max}
        min={this.props.min}
        value={this.props.value}
      />
    );
  }
}

Range.defaultProps = {
  className: 'range-default',
  onChange() {}, // ES6 method shorthand syntax
  onClick() {},
  onKeyDown() {},
  onMouseMove() {},
};

Range.propTypes = {
  max: React.PropTypes.number,
  min: React.PropTypes.number,
  value: React.PropTypes.number,
  className: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onClick: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  onMouseMove: React.PropTypes.func,
};

export default Range;
