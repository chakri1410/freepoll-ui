import { Component, OnInit, HostListener } from '@angular/core';
import { PollService } from '../services/poll/poll.service';
import { ActivatedRoute } from '@angular/router';
import { PollResult } from '../models/poll';

@Component({
  selector: 'app-result-poll',
  templateUrl: './result-poll.component.html',
  styleUrls: ['./result-poll.component.css']
})
export class ResultPollComponent implements OnInit {

  screenHeight: number;
  screenWidth: number;
  title = '';
  type = 'PieChart';
  data = [];
  responseData: PollResult;
  columnNames = ['Question','Option'];
  options = {
    //colors: ['#4f3961', '#ea728c', '#fc9d9d', '#f3d4d4', '#ffbd69','#fe346e', '#b21f66'],
    titleTextStyle: {
      fontName: 'Roboto, "Helvetica Neue", sans-serif',
      fontSize: 20
    },
    legend: {
      position: 'top',
      textStyle:{
        fontName: 'Roboto, "Helvetica Neue", sans-serif',
        fontSize: 12
      },
      maxLines: 20
    },
    vAxis: {maxValue: 10},
    is3D: false,
    pieHole: 0.4
  };
  width = 0;
  height = 0;

  constructor(private _pollService: PollService,
              private _activateRoute: ActivatedRoute) {
    this.getScreenSize();
    this.width = (this.screenWidth/100)*70;
    this.height = (this.screenHeight);
    // Get Poll results
    this._activateRoute.params.subscribe((data) => {
      const routeGuid: string = data['id'];
      this._pollService.result(routeGuid).subscribe((data: PollResult)=>{
        this.setGraphData(data);
        this.responseData = data;
      },
      error=> {

      });
    });
  }

  ngOnInit() {
  }

  setGraphData(result: any) {
    this.title = result.question;
    this.data = [];

    result.options.forEach(element => {
      this.data.push([element.label,element.count]);
    });

    this.columnNames = ['Question', 'Option'];
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
    }

}
