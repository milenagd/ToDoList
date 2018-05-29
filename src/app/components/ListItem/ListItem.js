import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './ListItem.scss';

import MinusIcon from 'icons/minus.svg';
import CheckedIcon from 'icons/checked.svg';

const ListItem = props => {
  return (
    <li className={styles.item}>
      <span className={styles.task} tabIndex="0">
        {props.task}
      </span>
      <div className={styles.wrapperActions}>
        <button
          aria-label="deletar anotação"
          className={styles.delete}
          onClick={props.handleDeleteTask}
        >
          <MinusIcon className={styles.deleteIcon} />
        </button>
        <button
          aria-label={`${
            props.isCompleted ? 'desmarcar' : 'marcar'
          } tarefa como concluída`}
          className={styles.check}
          onClick={props.handleCompleteTask}
        >
          <CheckedIcon
            className={`${styles.checkIcon} ${
              props.isCompleted ? styles.completed : null
            }`}
          />
        </button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  task: string.isRequired,
  isCompleted: bool.isRequired,
  handleDeleteTask: func.isRequired,
  handleCompleteTask: func.isRequired,
};

export default ListItem;
