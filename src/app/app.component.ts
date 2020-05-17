import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavigationModel } from './models/navigation';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationMenuService } from './services/navigation-menu/navigation-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'freepoll-ui';

  fillerNav: NavigationModel[];
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              navigationMenuService: NavigationMenuService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.fillerNav = navigationMenuService.get();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
