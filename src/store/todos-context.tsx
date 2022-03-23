import React, { useState } from "react";
import Todo from "../models/todo";

type Todoctx = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<Todoctx>({
	items: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([
		new Todo("Learn React"),
		new Todo("Learn TypeScript"),
	]);

	const addHandler = (text: string) => {
		setTodos((prev) => prev.concat(new Todo(text)));
	};

	const removeHandler = (s: string) => {
		setTodos((prev) => prev.filter((it) => s !== it.id));
	};

	const contextValue:Todoctx = {
		items: todos,
		addTodo: addHandler,
		removeTodo: removeHandler,
	};
	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
