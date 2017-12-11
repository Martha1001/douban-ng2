import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './view/page/page.component';
import { HomeComponent } from './view/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie', component: HomeComponent }
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