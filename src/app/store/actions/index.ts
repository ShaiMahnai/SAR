import {createAction, props} from '@ngrx/store';
import {Photo, Post} from '../types';

export const setPosts = createAction('[Home Page] setPosts', props<{ posts: Post[] }>());
export const setPhotos = createAction('[Home Page] setPhotos', props<{ photos: Photo[] }>());
export const createPost = createAction('[Posts Page] create post', props<{ post: Post }>());
export const updatePost = createAction('[Posts Page] update post', props<{ post: Post, index: number }>());
export const deletePost = createAction('[Posts Page] delete post', props<{ post: Post }>());
