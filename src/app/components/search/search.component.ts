import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../services/themoviedb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  termino: string;
  loading = false;
  nodata = false;
  constructor(private _ms: ThemoviedbService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      console.log('new:', param);
      if (param['id']) {
        this.termino = param['id'];
        this.searchMovies();
      }
    });
  }

  ngOnInit() {}

  searchMovies() {
    if (this.termino.length === 0) {
      this.nodata = false;
      return;
    }
    this.loading = true;
    this._ms.searchMovies(this.termino).subscribe((data: any[]) => {
      this.loading = false;
      if (data.length === 0) {
        this.nodata = true;
      } else {
        this.nodata = false;
      }
    });
  }
}
