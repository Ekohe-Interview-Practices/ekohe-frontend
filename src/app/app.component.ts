import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { SubscriptionCollection } from './shared/lib/subscription-collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  extends SubscriptionCollection
  implements OnInit, OnDestroy
{
  title = 'Ekohe Bookshelf';
  navigating = false;

  constructor(private _router: Router) {
    super();
  }

  ngOnInit(): void {
    this.watchForEveryNav();
  }

  private watchForEveryNav() {
    this.newAsync(
      this._router.events
        .pipe(
          filter((e) => e instanceof NavigationStart),
          tap(() => (this.navigating = true))
        )
        .subscribe()
    );
    this.newAsync(
      this._router.events
        .pipe(
          filter(
            (e) => e instanceof NavigationEnd || e instanceof NavigationCancel
          ),
          tap(() => (this.navigating = false))
        )
        .subscribe()
    );
  }
}
