import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as consts from '../app.consts';
import * as types from '../store/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getPosts = () => this.httpClient.get<types.Post[]>(`${consts.API_URL}/${consts.POSTS}`);
  getPhotos = () => this.httpClient.get<types.Photo[]>(`${consts.API_URL}/${consts.PHOTOS}`);
}
