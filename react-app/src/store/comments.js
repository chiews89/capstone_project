const GET_COMMENTS = "comments/GET_COMMENTS";

const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    comments,
  };
};

export const getAllComments = () => async (dispatch) => {
  const res = await fetch(`/api/comments`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getComments(data.comments));
    return data.comments;
  }
};

export const commentsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = { ...state };
      action.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    default:
      return state;
  }
};
