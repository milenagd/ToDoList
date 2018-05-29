let nextTaskId = 0;

export const addTask = text => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  isCompleted: false,
  text,
});

export const sortTasks = event => ({
  type: 'SORT_TASKS',
  event,
});

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  id,
});

export const toggleCompleteTask = id => ({
  type: 'TOGGLE_COMPLETE_TASK',
  id,
});
