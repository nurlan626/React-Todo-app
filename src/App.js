import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  state = {
    value: '',
    TodoList:[]
  }
  deleteItem(index){
    let newTodoList = this.state.TodoList;
    newTodoList.splice(index, 1)
    this.setState({
      TodoList: newTodoList
    })

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.value){
    let newTodoList = this.state.TodoList;
    newTodoList.unshift({name: this.state.value, completed: true})
    this.setState({
      value: '',
      TodoList: newTodoList
    })
  }
  }
  render() {
   
    return (
      <div >
        <h1> React Todo app</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <button className="btn btn-primary" type="submit" value="" >Add </button>
      </form>
        {this.state.TodoList.map((todoItem, index) => {
          return(
           <Car
            key={index}
            name={todoItem.name}
            onDelete={this.deleteItem.bind(this, index)}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
