const GET_POSTS = "posts/GET_POSTS";
const GET_POST = "posts/GET_POST";
const CREATE_POST = "posts/CREATE_POST";
const EDIT_POST = "posts/EDIT_POST";

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

const getPost = (post) => {
  return {
    type: GET_POST,
    post,
  };
};

const addPost = (post) => {
  return {
    type: CREATE_POST,
    post,
  };
};

const editPost = (post) => {
  return {
    type: EDIT_POST,
    post,
  };
};

export const getAllPosts = () => async (dispatch) => {
  const res = await fetch("/api/posts/");
  if (res.ok) {
    const data = await res.json();
    dispatch(getPosts(data.posts));
    return data.posts;
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  const res = await fetch(`/api/posts/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getPost(data));
    return data;
  }
};

export const createPost = (post) => async (dispatch) => {
  const res = await fetch(`/api/posts/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addPost(data));
    return data;
  }
};

export const editSinglePost = (post) => async (dispatch) => {
  const res = await fetch(`/api/posts/${post.id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(editPost(data));
    return data;
  }
};

export const postsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_POSTS:
      newState = { ...state };
      action.posts.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    case GET_POST:
      newState = { ...state };
      newState[action.post.id] = action.post;
      return newState;
    case CREATE_POST:
      newState = { ...state };
      newState[action.post.id] = action.post;
      return newState;
    case EDIT_POST:
      newState = { ...state };
      newState[action.post.id] = action.post;
      return newState;
    default:
      return state;
  }
};
