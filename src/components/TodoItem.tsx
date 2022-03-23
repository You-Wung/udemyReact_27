import Todo from '../models/todo';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todo: Todo, removeTodo: (s:string) => void }> = (props) => {
	const clickHand = () => {
		props.removeTodo(props.todo.id);
	};
	
	return (
		<li className={classes.item} onClick={clickHand}>
			{props.todo.text}
		</li>
	);
};

export default TodoItem;