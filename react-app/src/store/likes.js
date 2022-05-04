const GET_LIKES = "likes/GET_LIKES";
const ADD_LIKE = "likes/ADD_LIKE";
const REMOVE_LIKE = "likes/REMOVE_LIKE";

const getLikes = (likes) => {
  return {
    type: GET_LIKES,
    likes,
  };
};

const addLike = (like) => {
  return {
    type: ADD_LIKE,
    like,
  };
};

const removeLike = (id) => {
  return {
    type: REMOVE_LIKE,
    id,
  };
};

export const getAllLikes = () => async (dispatch) => {
  const res = await fetch("/api/likes/");
  if (res.ok) {
    const data = await res.json();
    dispatch(getLikes(data.likes));
    return data.likes;
  }
};

export const addALike = (like) => async (dispatch) => {
  const res = await fetch("/api/likes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addLike(data));
    return data;
  }
};

export const removeALike = (id) => async (dispatch) => {
  const res = await fetch(`/api/likes/delete/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    await dispatch(removeLike(id));
    return res;
  }
};

export const likesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_LIKES:
      newState = { ...state };
      action.likes.forEach((like) => {
        newState[like.id] = like;
      });
      return newState;
    case ADD_LIKE:
      newState = { ...state };
      newState[action.like.id] = action.like;
      return newState;
    case REMOVE_LIKE:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
