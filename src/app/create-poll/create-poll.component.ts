import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {

  public OptionsList: string[];
  constructor() { }

  ngOnInit() {
    this.OptionsList = ["First Option"];
  }

  addNewOption() {
    var elements = this.OptionsList.length;
    this.OptionsList[elements] = "";
  }

  removeItem(removeItem: number) {
    this.OptionsList.splice(removeItem, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.OptionsList, event.previousIndex, event.currentIndex);
  }

}
