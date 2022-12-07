import { render } from '@testing-library/react';
import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  hadleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser({ ...this.state });
    this.setState({ name: '', email: '' });
    this.props.closeForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.hadleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.hadleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
