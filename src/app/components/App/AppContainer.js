import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(App);
