import React from 'react';

class ListItem extends React.Component {
  render () {
    return (
      <div
        className={this.props.className}
        onClick={this.props.onClick}
      >
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default ListItem;
