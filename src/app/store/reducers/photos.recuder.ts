import {createReducer, on} from '@ngrx/store';
import * as actions from '../actions';
import * as types from '../types';


export interface PhotosState {
  photos: types.Photo[];
}

export const photosInitialState = {
  photos: [],
};

export const photosReducer = createReducer(
  photosInitialState,
  on(actions.setPhotos, (state, action) =>
    ({
      ...state,
      photos: action.photos
    })),
);
