import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../services/themoviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  cartelera: any;
  populares: any;
  child: any;
  loading = true;
  constructor(private movies: ThemoviedbService) {}

  ngOnInit() {
    this.movies.getCartelera().subscribe(data => {
      this.cartelera = data;
      this.loading = false;
    });
    this.movies.getPopulars().subscribe(data => {
      this.populares = data;
      this.loading = false;
    });
    this.movies.getMoviesChild().subscribe(data => {
      this.child = data;
      this.loading = false;
    });
  }
}
