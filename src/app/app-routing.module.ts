import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/shared/movie-details/movie-details.component';

const routes: Routes = [
  { path: 'home', component: MoviesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: 'movie/:id/:page', component: MovieDetailsComponent },
  { path: 'movie/:id/:page/:buscado', component: MovieDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
