import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContinueWatchingComponent } from './components/continue-watching/continue-watching.component';
import { NewTrailerComponent } from './components/new-trailer/new-trailer.component';
import { SeriesComponent } from './components/series/series.component';
import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    ContinueWatchingComponent,
    NewTrailerComponent,
    SeriesComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
