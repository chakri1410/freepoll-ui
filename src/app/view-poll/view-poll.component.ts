import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll/poll.service';
import { ActivatedRoute } from '@angular/router';
import { PollViewModel } from '../models/poll';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.scss']
})
export class ViewPollComponent implements OnInit {

  routeGuid: string;
  pollData: PollViewModel;
  pollExists = true;
  constructor(private _pollService: PollService,
    private _activateRoute: ActivatedRoute) {

    this._activateRoute.params.subscribe((data) => {
      this.routeGuid = data["id"];

      this._pollService.getPoll(this.routeGuid).subscribe(
        (data: PollViewModel) => {
          this.pollData = data;
          this.pollExists = true;
        },
        error =>{
          this.pollExists = false;
        });
    });
  }

  ngOnInit() {
  }

}
