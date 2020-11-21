import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FieldErrorDisplayComponent } from './components/contact/field-error-display/field-error-display.component';
import { LazyLoadImageModule} from 'ng-lazyload-image';
import { PostElementComponent } from './components/posts/post-element/post-element.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    PostsComponent,
    ContactComponent,
    MenuComponent,
    FieldErrorDisplayComponent,
    PostElementComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    ScrollingModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
