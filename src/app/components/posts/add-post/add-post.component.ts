import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {createPost} from '../../../store/actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {Post} from '../../../store/types';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required),
    });
  }

  onSubmit = () => {
    if (!this.form.invalid) {
      const post: Post = {
        userId: this.form.controls.userId.value,
        title: this.form.controls.title.value,
        body: this.form.controls.body.value
      };
      this.store.dispatch(createPost({post}));
      this.form.reset();
    }
  }
}
