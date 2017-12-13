import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './view/page/page.component';
import { HomeComponent } from './view/home/home.component';
import { ActivityComponent } from './view/activity/activity.component';
import { MovieComponent } from './view/movie/movie.component';
import { BookComponent } from './view/book/book.component';
import { SubjectComponent } from './view/subject/subject.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'activity', component: ActivityComponent },
      { path: 'movie', component: MovieComponent }
    ]
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }