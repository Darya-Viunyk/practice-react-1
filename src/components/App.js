import { usersData } from '../data/user';
import { Component } from 'react';
import { Button } from './Button/Button';
import { UsersList } from './UserList/UserList';
import { Form } from './UserList/Form';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: usersData,
    isListShown: false,
    isFormShown: false,
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };

  showUsers = () => {
    this.setState({ isListShown: true });
  };
  openForm = () => {
    this.setState({ isFormShown: true });
  };
  addUser = data => {
    const newUser = { ...data, id: nanoid() };
    this.setState(prevState => ({ users: [...prevState.users, newUser] }));
  };
  closeForm = () => {
    this.setState({ isFormShown: false });
  };
  render() {
    const { users, isListShown, isFormShown } = this.state;
    return (
      <>
        {isListShown ? (
          <>
            <UsersList users={users} deleteUser={this.deleteUser} />
            <Button text="Add user" clickHandler={this.openForm} />
          </>
        ) : (
          <Button text="Show users" clickHandler={this.showUsers} />
        )}
        {isFormShown && (
          <Form addUser={this.addUser} closeForm={this.closeForm} />
        )}
      </>
    );
  }
}
