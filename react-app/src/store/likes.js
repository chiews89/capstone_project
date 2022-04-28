const GET_LIKES = "likes/GET_LIKES";

const getLikes = (likes) => {
  return {
    type: GET_LIKES,
    likes,
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

export const likesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_LIKES:
      newState = { ...state };
      action.likes.forEach((like) => {
        newState[like.id] = like;
      });
      return newState;
    default:
      return state;
  }
};
