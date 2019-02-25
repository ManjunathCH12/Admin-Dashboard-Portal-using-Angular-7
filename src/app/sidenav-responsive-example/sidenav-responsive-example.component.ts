import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-sidenav-responsive-example',
  templateUrl: './sidenav-responsive-example.component.html',
  styleUrls: ['./sidenav-responsive-example.component.scss']
})
// export class SidenavResponsiveExampleComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class SidenavResponsiveExampleComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);
   
  

  // fillerContent = Array.from({length: 10}, () =>
  //     `Pending work to be done!`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}

