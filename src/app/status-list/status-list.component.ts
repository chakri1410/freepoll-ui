import { Component, OnInit } from '@angular/core';
import { StatusService, Status } from '../status.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {

  public statusData: Status[];
  constructor(public statusService: StatusService) { }

  ngOnInit() {
    this.statusService.getStatus().subscribe((data : Status[]) => {
      this.statusData = data;
    });
  }

}
