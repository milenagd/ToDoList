import { listViewType } from 'actions/listTasks';

const listTasks = (state = 'ALL', action) => {
  switch (action.type) {
    case 'LIST_TASKS':
      return listViewType[action.event.target.value];
    default:
      return state;
  }
};

export default listTasks;
