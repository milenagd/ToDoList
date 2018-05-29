import React from 'react';
import { array } from 'prop-types';
import InputTaskContainer from 'components/InputTask';
import ListContainer from 'components/List';
import FilterTasksContainer from 'components/FilterTasks';
import SortContainer from 'components/Sort';

import styles from './App.scss';

const App = ({ tasks }) => {
  const scroll = tasks.length > 10 ? styles.wrapperListScroll : null;
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Minha Lista de Tarefas</h1>
      <InputTaskContainer />
      {tasks.length > 0 ? (
        <div>
          <SortContainer />
          <div className={`${styles.wrapperList} ${scroll}`}>
            <ListContainer />
          </div>
          <FilterTasksContainer />
        </div>
      ) : (
        <div className={styles.wrapperList} />
      )}
    </div>
  );
};

App.propTypes = {
  tasks: array.isRequired,
};

export default App;
