import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent{

  public OptionsList: string[];
  newOptionValue = "";
  fg: FormGroup;

  constructor() {
    this.fg = new FormGroup({
      question: new FormControl('', [Validators.required]),
      options: new FormArray([]),
      newoption: new FormControl(''),
      optionType: new FormControl('rb'),
      duplicateCheck: new FormControl('no')
    });
  }

  // On Submit
  onSubmit(){
    console.log(this.fg.value);
  }


  /// Get Values
  get newoptionvalue(){
    return this.fg.get('newoption').value;
  }

  get getOptionType(){
    return this.fg.get('optionType').value;
  }

  get getDuplicateCheck(){
    return this.fg.get('duplicateCheck').value;
  }

  get options() : FormArray {
    return this.fg.get("options") as FormArray;
  }
  ////

  // Add New Option
  addNewOption() {
    this.options.push(this.newOption());
  }
  newOption(){
    var nfg = new FormControl(this.fg.get('newoption').value,[Validators.required, Validators.minLength(3)]);
    this.fg.get('newoption').reset();
    return nfg;
  }

  //remove item
  removeItem(removeItem: number) {
    this.options.removeAt(removeItem);
  }

  //drag and drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.options.value, event.previousIndex, event.currentIndex);
  }

}
