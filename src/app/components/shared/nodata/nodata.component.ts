import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nodata',
  templateUrl: './nodata.component.html',
  styleUrls: ['./nodata.component.css']
})
export class NodataComponent implements OnInit {
  @Input() termino: string;

  constructor() {}

  ngOnInit() {}
}
