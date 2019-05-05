import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
  state = {
    todo: ''
  }

  render() {
    const { addTodo, delTodo, delById } = this.props;

    // StoreのTodoからリストを生成
    const list = this.props.todo.todoList.map(e =>
      <li key={e.id}>
        <button
          className="delete"
          onClick={() => delById(e.id)}
        >
          削除
        </button>
        <span className="todoId">{e.id}</span>
        {e.todo}
      </li>
    );

    return (
      <div>
        <input type="text" onChange={elm => this.setState({ todo: elm.target.value })} />
        <button onClick={() => addTodo(this.state.todo)}>追加</button>
        <button onClick={() => delTodo(this.state.todo)}>削除</button>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}