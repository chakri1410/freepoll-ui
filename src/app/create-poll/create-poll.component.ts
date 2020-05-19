import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {

  public OptionsList: string[];
  constructor() { }

  ngOnInit() {
    this.OptionsList = ["hello", "test"];
  }

  addNewOption() {
    var elements = this.OptionsList.length;
    this.OptionsList[elements] = "";
  }

  removeItem(removeItem: number) {
    this.OptionsList.splice(removeItem, 1);
  }

}
