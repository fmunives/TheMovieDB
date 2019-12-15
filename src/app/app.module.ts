import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieCardComponent } from './components/shared/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/shared/movie-details/movie-details.component';
import { MovieImagePipe } from './pipes/movie-image.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { GaleryComponent } from './components/movies/galery.component';
import { NodataComponent } from './components/shared/nodata/nodata.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    SearchComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieImagePipe,
    LoadingComponent,
    GaleryComponent,
    NodataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
