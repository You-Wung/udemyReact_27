let num = 0;

class Todo {
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString() + num++;
	}
}

export default Todo;