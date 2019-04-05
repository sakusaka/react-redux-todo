import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: ''
  }

  render() {
    console.log(this.props);

    // StoreのTodoからリストを生成
    const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>)

    return (
      <div>
        <input type="text" onChange={elm => this.setState({ todo: elm.target.value })} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>追加</button><br />
        <ul>
          {list}
        </ul>
      </div>
      <div><button onClick={() => this.props.delTodo(this.state.delTodo)}>削除</button></div>
    );
  }
}