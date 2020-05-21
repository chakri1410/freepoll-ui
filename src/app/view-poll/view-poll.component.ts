import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll/poll.service';
import { ActivatedRoute } from '@angular/router';
import { PollViewModel, PollOptions, PollVote, PollOptionVote } from '../models/poll';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.scss']
})
export class ViewPollComponent implements OnInit {

  routeGuid: string;
  public pollData: PollViewModel;
  pollExists = true;
  public loaded = false;
  fg: FormGroup;
  selected = Array(0);

  constructor(private _pollService: PollService,
    private _activateRoute: ActivatedRoute) {

    this.emptyFormGroup();
    this._activateRoute.params.subscribe((data) => {
      this.routeGuid = data["id"];

      this._pollService.getPoll(this.routeGuid).subscribe(
        (data: PollViewModel) => {
          this.pollData = data;
          this.fillFormGroup(data);
          this.loaded = true;
          this.pollExists = true;
        },
        error => {
          this.pollExists = false;
        });
    });
  }

  emptyFormGroup() {
    let tempP = new PollVote();
    tempP.pollId = 0;
    tempP.options = [];
    this.initFormGroup(tempP);
  }


  fillFormGroup(data: PollViewModel)
  {
    let p = new PollVote();
    p.pollId = data.pollId;
    p.options = [];

    data.pollOptions.forEach((element) => {
      let po = new PollOptionVote();
      po.optionId = element.pollOptionId;
      po.optionText = element.optionText;
      po.isChecked = false;
      p.options.push(po);
    });
    this.initFormGroup(p);
  }

  initFormGroup(data: PollVote) {
    this.fg = new FormGroup({
      pollid: new FormControl(data.pollId),
      options: new FormArray([])
    });

    data.options.forEach(element => {
      this.addNewOption(element);
    });
  }

  onCheckChange(event) {
    if (event.target.checked) {
      console.log(event.target);
      if (this.pollData.type == 0) {
        this.selected.pop();
      }
      this.selected.push(event.target.value);
    }
    else {
      const index = this.selected.indexOf(event.target.value);
      this.selected.splice(index, 1);
    }
  }
  ngOnInit() {
  }

  onSubmit() {
    this.options.controls.forEach(element => {
      element.setValue({ optionId: element.value.optionId, optionText: element.value.optionText, isChecked : (this.selected.includes(element.value.optionId.toString()))});
    });

    console.log(this.fg.value);
  }

  // add new option
  addNewOption(newoptionvalue: PollOptionVote) {
    const nfg = new FormControl(newoptionvalue);
    this.options.push(nfg);
  }

  // get data
  get options(): FormArray {
    return this.fg.get('options') as FormArray;
  }

}
