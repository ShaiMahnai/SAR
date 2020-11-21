import {createReducer, on} from '@ngrx/store';

import * as types from '../types';
import * as actions from '../actions';

export interface PostsState {
  posts: types.Post[];
}

export const postsInitialState = {
  posts: [],
};


export const postsReducer = createReducer(
  postsInitialState,
  on(actions.setPosts, (state, action) =>
    ({
      ...state,
      posts: action.posts
    })),
  on(actions.createPost,
    (state, action) =>
      ({
        ...state,
        posts: [...state.posts, action.post]
      })),
  on(actions.updatePost,
    (state, action) => {
      action.post.id = state.posts.length;
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, action.index),
          action.post,
          ...state.posts.slice(action.index + 1),
        ]
      };
    }),
  on(actions.deletePost,
    (state, action) =>
      ({
        ...state,
        posts: state.posts.filter(element => element !== action.post)
      })),
);
