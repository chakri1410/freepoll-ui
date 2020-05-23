import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavigationModel } from './models/navigation';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationMenuService } from './services/navigation-menu/navigation-menu.service';
import { OverlayService } from './overlay/overlay.module';
import { SidenavService } from './services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'freepoll-ui';

  mobileQuery: MediaQueryList;
  public displayProgressSpinner = false;
  private mobileQueryListener: () => void;
  public onSideNavChange: boolean;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              overlayService: OverlayService,
              private _sidenavService: SidenavService) {
    // this.mobileQuery = media.matchMedia('(max-width: 600px)');
    //this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this.mobileQueryListener);

    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    });
    overlayService.progressBarVisibility.subscribe((data)=>{
      this.displayProgressSpinner = data;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
