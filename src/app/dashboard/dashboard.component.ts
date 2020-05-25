import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private _tiles;
  constructor() {
    this._tiles = [
      {cols: 2,rows: 4,color: 'gray'},
      {cols: 2,rows: 4,color: 'white'},
    ];
  }

  ngOnInit() {
  }

}
