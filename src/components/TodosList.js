import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const { deleteTodoProps, handleChangeProps } = this.props;
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}
TodosList.propTypes = {
  deleteTodoProps: PropTypes.func,
  handleChangeProps: PropTypes.func,
  todos: PropTypes.object,
};
TodosList.defaultProps = {
  deleteTodoProps: () => {},
  handleChangeProps: () => {},
  todos: {},
};

export default TodosList;
