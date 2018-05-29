import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { deleteTask, toggleCompleteTask } from 'actions/tasks';

const getTasks = (tasks, filter) => {
  switch (filter) {
    case 'COMPLETED':
      return tasks.filter(task => task.isCompleted);
    default:
      return tasks;
  }
};

const mapStateToProps = state => ({
  tasks: getTasks(state.tasks, state.listTasks),
});

const mapDispatchToProps = {
  handleDeleteTask: deleteTask,
  handleCompleteTask: toggleCompleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
