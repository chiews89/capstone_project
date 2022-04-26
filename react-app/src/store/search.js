const GET_USERS = "search/GET_USERS";

const search = (users) => ({
  type: GET_USERS,
  users,
});

export const searchUsers = (input) => async (dispatch) => {
  console.log('input', input)
  const res = await fetch("/api/users/search", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const data = await res.json();
  console.log('data', data)
  dispatch(search(data));
};

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
