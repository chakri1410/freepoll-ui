import { Injectable } from '@angular/core';
import { NavigationModel } from 'src/app/models/navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationMenuService {
  private navigationMenuItems: NavigationModel[];
  constructor() {
    this.navigationMenuItems = [
      { name: 'Home', url: '.', icon: 'home', submenu: [] },
      { name: 'Poll', url: '', icon: 'poll', submenu: [
        { name: 'Poll', url: 'poll/new', icon: 'fiber_new', submenu: [] },
        { name: 'Results', url: 'poll/results', icon: '', submenu: [] }
      ] },
      { name: 'Vote', url: '', icon: 'how_to_vote', submenu: [
        { name: 'Poll', url: 'poll/view', icon: '', submenu: [] }
      ] },
      { name: 'Status', url: 'status', icon: 'info', submenu: [] },
      { name: 'Who are we?', url: 'status', icon: 'face', submenu: [] }];
  }

  get(): NavigationModel[] {
    return this.navigationMenuItems;
  }

}

