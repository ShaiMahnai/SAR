import {Component, Input, OnInit} from '@angular/core';
import * as types from '../../../store/types';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import { deletePost} from '../../../store/actions';

@Component({
  selector: 'app-post-element',
  templateUrl: './post-element.component.html',
  styleUrls: ['./post-element.component.scss']
})
export class PostElementComponent implements OnInit {
  @Input() post: types.Post;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  obDeletePost = () => this.store.dispatch(deletePost({post: this.post}));


}
