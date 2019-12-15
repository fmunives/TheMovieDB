import { Component, OnInit, Input } from '@angular/core';
import { ThemoviedbService } from '../../../services/themoviedb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() termino: string;
  buscado: string;
  constructor(public _ms: ThemoviedbService) {}

  ngOnInit() {}
}
