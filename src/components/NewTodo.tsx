import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	const textRef = useRef<HTMLInputElement>(null);

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const txt = textRef.current!.value; // ! is 100%
		if (txt.trim().length === 0) return;
		todosCtx.addTodo(txt);
	};

	return (
		<form onSubmit={onSubmit} className={classes.form}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={textRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
