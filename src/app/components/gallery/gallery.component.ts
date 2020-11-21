import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../store/types';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {getPhotos} from '../../store/selectors';
import {DEFAULT_IMAGE_SRC} from '../../app.consts';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss', '../../styles/styles.scss']
})
export class GalleryComponent implements OnInit {
  @Input() showFirst = -1; // if showFirst = -1 =>display all
  @Input() fullPageSize = true;
  photos: Photo[];
  loading: string = DEFAULT_IMAGE_SRC;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(getPhotos)).subscribe(
      state => {
        this.photos = state.photos;
        this.photos = this.showFirst > -1 ? this.photos.slice(0, this.showFirst) : this.photos;
      }
    );
  }

}
