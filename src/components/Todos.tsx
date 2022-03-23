import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//React.FC (제네릭) 사용하면, children 포함
const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem key={item.id} todo={item} removeTodo={todosCtx.removeTodo} />
			))}
		</ul>
	);
};

export default Todos;
