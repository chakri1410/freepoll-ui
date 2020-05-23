import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

}
