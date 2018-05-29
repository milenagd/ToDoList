import React from 'react';
import ListItem from 'components/ListItem';
import { array, func } from 'prop-types';

import styles from './List.scss';

const List = props => (
  <ul className={styles.list}>
    {props.tasks.map(item => {
      return (
        <ListItem
          key={`listItem-${item.id}`}
          task={item.text}
          handleDeleteTask={() => props.handleDeleteTask(item.id)}
          handleCompleteTask={() => props.handleCompleteTask(item.id)}
          isCompleted={item.isCompleted}
        />
      );
    })}
  </ul>
);

List.propTypes = {
  tasks: array.isRequired,
  handleDeleteTask: func.isRequired,
  handleCompleteTask: func.isRequired,
};

export default List;
