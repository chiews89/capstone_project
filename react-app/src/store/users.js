const GET_USERS = "user/GET_USERS";

const getUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const getAllUsers = () => async (dispatch) => {
  const response = await fetch("/api/users/");
  if (response.ok) {
    const users = await response.json();
    dispatch(getUsers(users));
    return users;
  }
  return response;
};

export const usersReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_USERS: {
      newState = { ...state };
      action.users.users.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;
    }
    default:
      return state;
  }
};
