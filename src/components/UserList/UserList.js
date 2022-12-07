import { User } from './User';
import PropTypes from 'prop-types';

export const UsersList = ({ users, deleteUser }) => {
  return (
    <ul>
      {users.map(({ id, name, email }) => {
        return (
          <li key={id}>
            <User name={name} email={email} deleteUser={deleteUser} id={id} />
          </li>
        );
      })}
    </ul>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
