const GET_POSTS = "posts/GET_POSTS";
const GET_POST = "posts/GET_POST";

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

export const getAllPosts = () => async (dispatch) => {
  const res = await fetch("/api/posts/");
  if (res.ok) {
    const data = await res.json();
    dispatch(getPosts(data.posts));
    return data.posts;
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  const res = await fetch("/api/posts/");
  if (res.ok) {
    const data = await res.json();
    dispatch(getPost(data));
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
    default:
      return state;
  }
};
