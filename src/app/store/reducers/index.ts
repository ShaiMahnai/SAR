import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {postsReducer, PostsState} from './posts.reducer';
import {photosReducer, PhotosState} from './photos.recuder';


export interface AppState {
  posts: PostsState;
  photos: PhotosState;
}


export const reducers: ActionReducerMap<AppState> = {
  posts: postsReducer,
  photos: photosReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
