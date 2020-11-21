import {MenuItem} from './app.model';

export const API_URL = 'https://jsonplaceholder.typicode.com';
export const POSTS = 'posts';
export const PHOTOS = 'photos';


export const MENU_ITEMS: MenuItem[] = [
  {title: 'Home', url: 'home'},
  {title: 'Posts', url: 'posts'},
  {title: 'Gallery', url: 'gallery'},
  {title: 'Contact us', url: 'contact'}
];

export const DEFAULT_IMAGE_SRC = 'assets/loading.gif';
