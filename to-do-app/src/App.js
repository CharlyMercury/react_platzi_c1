import React from 'react';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'
//import './App.css';
import './index.css'

const todos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'Tomar el curso de introduccion a React en platzi ', completed: false},
    {text: 'LLorar con la llorona', completed: false},

  ];

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
  <React.Fragment>
    <TodoCounter/>
    <TodoSearch
    	searchValue = {searchValue}
    	setSearchValue = {setSearchValue}	
    />
    <TodoList>
      {todos.map(
        todo => (
         <TodoItem 
         key={todo.text} 
         text={todo.text}
         completed={todo.completed}
         /> 
        ))}
    </TodoList>
    <CreateTodoButton/>
  
  </React.Fragment>
    );
}

export default App;
