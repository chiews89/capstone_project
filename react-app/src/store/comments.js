const GET_COMMENTS = "comments/GET_COMMENTS";
const CREATE_COMMENT = "comments/CREATE_COMMENT";
const EDIT_COMMENT = 'comments/EDIT_COMMENT'
const DELETE_COMMENT = "comments/DELETE_COMMENT";

const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    comments,
  };
};

const createComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment,
  };
};

const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    id,
  };
};

export const getAllComments = () => async (dispatch) => {
  const res = await fetch(`/api/comments/`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getComments(data.comments));
    return data.comments;
  }
};

export const createNewComment = (comment) => async (dispatch) => {
  const res = await fetch(`/api/comments/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(createComment(data));
    return data;
  }
};

export const editAComment = (comment) => async (dispatch) => {
  const res = await fetch(`/api/comments/${comment.id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(editComment(data));
    return data;
  }
}

export const deleteAComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/delete/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    await dispatch(deleteComment(id));
    return res;
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
    case CREATE_COMMENT:
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    case EDIT_COMMENT:
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    case DELETE_COMMENT:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
