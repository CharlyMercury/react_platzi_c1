import React from 'react';
import {AppUI} from './AppUI'

const defaultTodos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Tomar el curso de introduccion a React en platzi ', completed: false},
    {text: 'LLorar con la llorona', completed: false},

  ];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo=> !!todo.completed).length;

  let searchedTodos = [];
  
  if (!searchValue.length >= 1){
  	searchedTodos = todos;
  } else {
  	searchedTodos = todos.filter( todo => {
	  	const todoText = todo.text.toLowerCase();
	  	const searchText = searchValue.toLowerCase();
	  	return todoText.includes(searchText);
  	});
  }

  const completeTodo = (text)=>{
  	const todoIndex = todos.findIndex(todo=>todo.text===text);
  	const newTodos = [...todos];
  	newTodos[todoIndex].completed = true;
  	setTodos(newTodos);
  };
  

  const deleteTodo = (text)=>{
  	const todoIndex = todos.findIndex(todo=>todo.text===text);
  	const newTodos = [...todos];
	newTodos.splice(todoIndex, 1);
  	setTodos(newTodos);
  };


  return (
	<AppUI 
	    	totalTodos = {totalTodos}
	    	completedTodos = {completedTodos}
	    	searchValue = {searchValue}
	    	setSearchValue = {setSearchValue}	
	    	searchedTodos = {searchedTodos}
	    	completeTodo = {completeTodo}
	    	deleteTodo = {deleteTodo}
	/>
    );
}

export default App;
