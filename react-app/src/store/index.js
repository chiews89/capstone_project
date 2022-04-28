import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { commentsReducer } from './comments';
import { likesReducer } from './likes';
import { postsReducer } from './posts';
import session from './session'
import { usersReducer } from './users';

const rootReducer = combineReducers({
  session,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  likes: likesReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
