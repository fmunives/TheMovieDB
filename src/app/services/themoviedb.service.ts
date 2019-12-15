import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  apiKey = '78945ff924f7124b6398f481b0d07797';
  url = 'https://api.themoviedb.org/3';
  peliculas: any[] = [];
  constructor(private jsonp: HttpClientJsonpModule, private http: HttpClient) {}

  getCartelera() {
    const now = new Date();
    const future = new Date();
    future.setDate(future.getDate() + 7);
    const nowStr = `${now.getFullYear()}-${now.getMonth() +
      1}-${now.getDate()}`;
    const futureStr = `${future.getFullYear()}-${future.getMonth() +
      1}-${future.getDate()}`;
    return this.http
      .jsonp(
        `${this.url}/discover/movie?api_key=${this.apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${nowStr}&primary_release_date.lte=${futureStr}`,
        'callback'
      )
      .pipe(map(resp => resp['results']));
  }

  getPopulars() {
    return this.http
      .jsonp(
        `${this.url}/movie/top_rated?api_key=${this.apiKey}&language=es-ES&page=1`,
        'callback'
      )
      .pipe(map(resp => resp['results']));
  }
  getMovie(id: string) {
    return this.http.jsonp(
      `${this.url}/movie/${id}?api_key=${this.apiKey}&language=es-ES`,
      'callback'
    );
  }

  getMoviesChild() {
    return this.http
      .jsonp(
        `${this.url}/discover/movie?api_key=${this.apiKey}&language=es-ES&sort_by=popularity.desc&certification.lte=G&include_adult=false&include_video=false&page=1`,
        'callback'
      )
      .pipe(map(resp => resp['results']));
  }

  searchMovies(termino: string) {
    return this.http
      .jsonp(
        `${this.url}/search/movie?api_key=${this.apiKey}&language=es-ES&query=${termino}&page=1&include_adult=false`,
        'callback'
      )
      .pipe(
        map(resp => {
          this.peliculas = resp['results'];
          return resp['results'];
        })
      );
  }
}
