import React from 'react';
import { func } from 'prop-types';
import Filter from 'commons/Filter';
import { sortOptions } from 'constants/sortOptions';

const Sort = ({ handleChange }) => (
  <Filter
  	id={sortOptions.id}
    label={sortOptions.label}
    options={sortOptions.options}
    handleChange={handleChange}
  />
);

Sort.propTypes = {
  handleChange: func.isRequired,
};

export default Sort;
