import React, { Component } from 'react';
import ListItem from './ListItem';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [],
      textField: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange (e) {
    this.setState({
      textField: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.textField.trim() === '') {
      return;
    }
    let newItems = this.state.items.slice();
    newItems.push({
      text: this.state.textField,
      status: 'incomplete'
    });
    this.setState({
      items: newItems,
      textField: ''
    });
  }

  handleComplete (index) {
    let newItems = this.state.items.slice();
    if (newItems[index].status === 'incomplete') {
      newItems[index].status = 'complete';
    }else{
      newItems[index].status = 'incomplete';
    }
    this.setState({
      items: newItems
    });
  }

  handleClear () {
    let newItems = this.state.items.slice();
    newItems = newItems.filter(item => {
      return item.status === 'incomplete'
    });
    this.setState({
      items: newItems
    });
  }

  render () {
    return (
      <div className="todo-list">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.textField} onChange={this.handleChange} placeholder="Add new item..." />
          <input type="submit" value="Add Item" />
        </form>
        <div>
          {this.state.items.map((item, index) => (
            <ListItem threshold={0.5} onClick={() => this.handleComplete(index)} className={item.status} key={index} value={item.text} />
          ))}
        </div>
        <ClearButton onClick={this.handleClear} hasItems={this.state.items.length > 0} />
      </div>
    );
  }
}

function ClearButton (props) {
  if (props.hasItems) {
    return <input onClick={props.onClick} type="button" value="Clear Completed Items" />;
  }else{
    return <input type="button" value="Clear Completed Items" disabled />;
  }
}

export default App;
