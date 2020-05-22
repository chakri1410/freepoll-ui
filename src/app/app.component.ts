import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavigationModel } from './models/navigation';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationMenuService } from './services/navigation-menu/navigation-menu.service';
import { OverlayService } from './overlay/overlay.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'freepoll-ui';

  fillerNav: NavigationModel[];
  mobileQuery: MediaQueryList;
  public displayProgressSpinner = false;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              navigationMenuService: NavigationMenuService,
              overlayService: OverlayService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.fillerNav = navigationMenuService.get();

    overlayService.progressBarVisibility.subscribe((data)=>{
      this.displayProgressSpinner = data;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
