import React from 'react';
import { connect } from 'react-redux';
import { addTask } from 'actions/tasks';
import InputTask from './InputTask';

const mapDispatchToProps = {
  add: addTask,
};

class InputTaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidInput: true,
    };
  }

  handleSubmit = event => {
    if (event.key === 'Enter' && event.target.value) {
      this.props.add(event.target.value);
      event.target.value = '';
      this.setState({ isValidInput: true });
    } else if (event.key === 'Enter' && !event.target.value){
      this.setState({ isValidInput: false });
    }
  };

  render() {
    return (
      <InputTask
        isValidInput={this.state.isValidInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(InputTaskContainer);
