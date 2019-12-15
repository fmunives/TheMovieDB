import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemoviedbService } from '../../../services/themoviedb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  loading = true;
  volverA: string;
  buscado: string;
  constructor(private route: ActivatedRoute, private _ms: ThemoviedbService) {
    this.route.params.subscribe(param => {
      if (param['buscado']) {
        this.buscado = param['buscado'];
      }
      this.volverA = param['page'];
      this._ms.getMovie(param['id']).subscribe(data => {
        this.movie = data;
        this.loading = false;
      });
    });
  }

  ngOnInit() {}
}
