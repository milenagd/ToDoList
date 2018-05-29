import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';
import { sortTasks } from 'actions/tasks';

const mapDispatchToProps = {
  handleChange: sortTasks,
};

export default connect(null, mapDispatchToProps)(Sort);
