import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import Todo from '../components/Todo';

const mapStateToProps = state => {
  return {
    todo: state.todo,
    deltodo: state.deltodo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(actions.addTodo(todo)),
    delTodo: (deltodo) => dispatch(actions.delTodo(deltodo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
