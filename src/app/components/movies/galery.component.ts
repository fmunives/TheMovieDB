import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-galery",
  templateUrl: "./galery.component.html",
  styleUrls: ["./galery.component.css"]
})
export class GaleryComponent implements OnInit {
  @Input() peliculas: any;
  @Input() titulo: string;

  overview: boolean = false;

  constructor() {}

  ngOnInit() {}

  MostrarOverview() {
    this.overview = true;
  }

  OcultarOverview() {
    this.overview = false;
  }
}
