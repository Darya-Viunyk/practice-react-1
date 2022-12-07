export const User = ({ name, email, deleteUser, id }) => {
  return (
    <>
      <p>
        name: <span>{name}</span>
      </p>
      <p>
        email: <span>{email}</span>
      </p>
      <button
        type="button"
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
