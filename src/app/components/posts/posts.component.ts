import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getPosts} from '../../store/selectors';
import {AppState} from '../../store/reducers';
import * as types from '../../store/types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss', '../../styles/styles.scss']
})
export class PostsComponent implements OnInit {
  @Input() showFirst = -1; // if showFirst = -1 =>display all
  @Input() fullPageSize = true;

  posts: types.Post[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(getPosts)).subscribe(
      state => {
        this.posts = state.posts;
        this.posts = this.showFirst > -1 ? this.posts.slice(0, this.showFirst) : this.posts;
      });
  }

}
