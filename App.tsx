import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions'

import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'


interface initialState {
  dispatch: any,
  visibleTodos: any
}

export class App extends Component<initialState> {
constructor(props:initialState){
  super(props);
}

  render(){
    const { dispatch, visibleTodos } = this.props
  return (
    <div className="App">
            <AddTodo onAddClick = {(text:any) => dispatch(addTodo(text))} />
            <TodoList todos = {visibleTodos}/>
    </div>
  );
  }
}

function select(state: { todos: String; }) {
  return {
     visibleTodos: state.todos
  }
}

export default connect(select)(App);