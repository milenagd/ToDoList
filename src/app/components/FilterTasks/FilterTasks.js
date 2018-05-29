import React from 'react';
import { func } from 'prop-types';
import Filter from 'commons/Filter';
import { filterOptions } from 'constants/filterOptions';

const FilterTasks = ({ handleChange }) => (
  <Filter
    id={filterOptions.id}
    label={filterOptions.label}
    options={filterOptions.options}
    handleChange={handleChange}
  />
);

FilterTasks.propTypes = {
  handleChange: func.isRequired,
};

export default FilterTasks;
