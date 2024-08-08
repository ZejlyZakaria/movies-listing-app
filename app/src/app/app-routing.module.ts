import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { AnimationComponent } from './components/animation/animation.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//   },
//   {
//     path: 'series',
//     component: NewTrailerComponent,
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MoviesComponent, // Default child route
      },
      {
        path: 'series',
        component: SeriesComponent,
      },
      {
        path: 'animation',
        component: AnimationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
