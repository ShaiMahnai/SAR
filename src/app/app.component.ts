import {Component, OnInit} from '@angular/core';
import {Photo, Post} from './store/types';
import {setPhotos, setPosts} from './store/actions';
import {DataService} from './services/data.service';
import {Store} from '@ngrx/store';
import {AppState} from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sar';

  constructor(private dataService: DataService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.updateStore();
  }

  updateStore = () => {
    this.dataService.getPosts().toPromise().then((posts: Post[]) => {
      this.store.dispatch(setPosts({posts}));
    });
    this.dataService.getPhotos().toPromise().then((photos: Photo[]) => {
      this.store.dispatch(setPhotos({photos}));
    });
  }
}

