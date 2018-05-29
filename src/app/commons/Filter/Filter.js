import React from 'react';
import { array, func, string } from 'prop-types';
import styles from './Filter.scss';

const Filter = props => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <select
        id={props.id}
        className={styles.select}
        onChange={props.handleChange}
      >
        {props.options.map(option => (
          <option key={`option-${option.value}`} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  options: array.isRequired,
  handleChange: func.isRequired,
};

export default Filter;
