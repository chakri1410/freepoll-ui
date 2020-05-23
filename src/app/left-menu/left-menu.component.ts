import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { onSideNavChange, animateText } from '../animations/animations';
import { NavigationModel } from '../models/navigation';
import { NavigationMenuService } from '../services/navigation-menu/navigation-menu.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState = false;
  public linkText = false;

  public pages: NavigationModel[];

  constructor(private _sidenavService: SidenavService, navigationMenuService: NavigationMenuService) {
    this.pages = navigationMenuService.get();
  }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }

}
