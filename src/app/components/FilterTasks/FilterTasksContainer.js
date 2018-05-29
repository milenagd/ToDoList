import React from 'react';
import { connect } from 'react-redux';
import FilterTasks from './FilterTasks';
import { showTasksList } from 'actions/listTasks';

const mapDispatchToProps = {
  handleChange: showTasksList,
};

export default connect(null, mapDispatchToProps)(FilterTasks);
