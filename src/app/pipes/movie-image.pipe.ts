import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {
  transform(movie: any): any {
    const urlImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    if (movie.backdrop_path) {
      return urlImage + movie.backdrop_path;
    } else if (movie.poster_path) {
      return urlImage + movie.poster_path;
    } else {
      return 'assets/img/noimage.png';
    }
  }
}
