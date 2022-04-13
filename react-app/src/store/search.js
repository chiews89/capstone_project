const GET_USERS = "search/GET_USERS";

const getUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const searchUsers = (searchTerm) => async (dispatch) => {
  const res = await fetch(`/api/users/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(searchTerm),
  });
  const data = await res.json();
  dispatch(getUsers(data));
};

export const searchReducer = (state = {}, action) => {
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
