import React from 'react';
import { bool, func } from 'prop-types';
import styles from './InputTask.scss';

const InputTask = ({ handleSubmit, isValidInput }) => {
  const warningClass = !isValidInput ? styles.warning : null;
  return (
    <div>
      <input
        className={`${styles.input} ${warningClass}`}
        aria-label="inserir tarefa"
        placeholder="Adicionar tarefa"
        onKeyPress={handleSubmit}
      />
      {!isValidInput && (
        <span className={styles.warningText}>* Insira alguma tarefa</span>
      )}
    </div>
  );
};

InputTask.propTypes = {
  handleSubmit: func.isRequired,
  isValidInput: bool.isRequired,
};

export default InputTask;
