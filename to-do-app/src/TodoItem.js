import React from 'react';
import './css/TodoItem.css';


function TodoItem(props){

	const onComplete = ()=> {
		alert('You have COMPLETED the ToDo: ' + props.text);
	};


	const onDelete = ()=> {
		alert('You DELETE the ToDo: ' + props.text);
	};

	return(
		<li className="TodoItem">
			<span 
				className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
				onClick={onComplete}
			> 
				C 
			</span>
			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`} > 					{props.text} 
			</p>
			<span 
				className="Icon Icon-delete" 
				onClick={onDelete}
			> 
				X 
			</span>
		</li>
	);
}

export {TodoItem};
