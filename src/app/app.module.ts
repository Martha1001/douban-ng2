import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageComponent } from './view/page/page.component';
import { HomeComponent } from './view/home/home.component';
import { ActivityComponent } from './view/activity/activity.component';
import { MovieComponent } from './view/movie/movie.component';
import { BookComponent } from './view/book/book.component';
import { SubjectComponent } from './view/subject/subject.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { QuickNavComponent } from './components/quick-nav/quick-nav.component';
import { RatingComponent } from './components/rating/rating.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { TagsComponent } from './components/tags/tags.component';
import { TypesComponent } from './components/types/types.component';
import { ListComponent } from './components/list/list.component';
import { DownAppComponent } from './components/down-app/down-app.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { LoadingComponent } from './components/loading/loading.component';
import { subStrPipe, toArrayPipe,arrToArrayPipe } from './pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    ActivityComponent,
    MovieComponent,
    BookComponent,
    SubjectComponent,
    HeaderBarComponent,
    DialogComponent,
    QuickNavComponent,
    RatingComponent,
    ScrollerComponent,
    TagsComponent,
    TypesComponent,
    ListComponent,
    DownAppComponent,
    AdBannerComponent,
    LoadingComponent,
    subStrPipe,
    toArrayPipe,
    arrToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
