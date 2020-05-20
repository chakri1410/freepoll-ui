import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PollService } from '../services/poll/poll.service';
import { PollModel, PollOptionTypes, PollViewModel } from '../models/poll';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent {

  newoptionvalue = '';
  minDate = moment().toDate();
  maxDate = moment().add(3, 'months').format('L');
  fg: FormGroup;
  newPollViewModel: PollViewModel;


  constructor(public pollService: PollService, public dialog: MatDialog) {
    const enddate30days = moment().add(30, 'days').toDate();
    this.fg = new FormGroup({
      question: new FormControl('', [Validators.required, Validators.minLength(10)]),
      options: new FormArray([]),
      optionType: new FormControl(PollOptionTypes.radiobutton.toString()),
      duplicateCheck: new FormControl('0'),
      endDate: new FormControl(enddate30days, [Validators.required])
    });
  }


  openDialog(mymessage: string): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '250px',
      data: {message: mymessage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // On Submit
  onSubmit() {
    let data: PollModel = new PollModel();
    data.name = this.getQuestion;
    data.options = this.getOptions;
    data.type = this.getOptionType;
    data.duplicate = this.getDuplicateCheck;
    data.endDate = moment(this.getEndDate).toDate();
    this.pollService.addPoll(data).subscribe(
      result => {
        let returnData: PollViewModel = result;
        this.newPollViewModel = returnData;
        this.openDialog(window.location.href+'/poll/'+returnData.PollGuid);
      },
      error =>{
        this.openDialog("Failed to create poll");
      });
  }


  /// Get Values
  get getEndDate(){
    return this.fg.get('endDate').value;
  }

  get getOptionType() {
    return this.fg.get('optionType').value;
  }

  get getQuestion() {
    return this.fg.get('question').value;
  }

  get getDuplicateCheck() {
    return this.fg.get('duplicateCheck').value;
  }

  get getOptions(){
    return this.fg.get('options').value;
  }

  get options(): FormArray {
    return this.fg.get('options') as FormArray;
  }
  ////

  // Add New Option
  addNewOption() {
    const nfg = new FormControl(this.newoptionvalue, [Validators.required, Validators.minLength(3)]);
    this.newoptionvalue = '';
    this.options.push(nfg);
  }

  // remove item
  removeItem(removeItem: number) {
    this.options.removeAt(removeItem);
  }

  // drag and drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.options.value, event.previousIndex, event.currentIndex);
  }

}
