import { Injectable } from '@angular/core';
import { NavigationModel } from 'src/app/models/navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationMenuService {
private navigationMenuItems: NavigationModel[]
constructor() {
  this.navigationMenuItems = [
    {name: 'Home', url: '.'},
    {name: 'Dashboard', url: 'dashboard'},
    {name: 'New Poll', url: 'poll/new'},
    {name: 'New Survey', url: 'survey/new'},
    {name: 'Status', url: 'home'}];
}

get() : NavigationModel[] {
  return this.navigationMenuItems;
}

}

