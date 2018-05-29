const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: action.isCompleted,
        },
      ];
    case 'SORT_TASKS':
      const dict = {
        antigas: true,
        recentes: false,
      };
      const isAsc = dict[action.event.target.value];
      const sortedTasks = isAsc
        ? state.sort((t1, t2) => t1.id - t2.id)
        : state.sort((t1, t2) => t2.id - t1.id);
      return [...sortedTasks];
    case 'DELETE_TASK':
      const newList = state.filter(item => item.id !== action.id);
      return [...newList];
    case 'TOGGLE_COMPLETE_TASK':
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    default:
      return state;
  }
};

export default tasks;
