/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavigationMenuService } from './navigation-menu.service';

describe('Service: NavigationMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationMenuService]
    });
  });

  it('should ...', inject([NavigationMenuService], (service: NavigationMenuService) => {
    expect(service).toBeTruthy();
  }));
});
