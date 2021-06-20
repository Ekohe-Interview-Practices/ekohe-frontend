import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// TODO: Implement this as an attribute (AOP) instead of a class you need to inherited from.
@Directive()
export abstract class SubscriptionCollection implements OnDestroy {
  protected asyncActions: Subscription[] = [];

  /**
   * Register a new subscription of an async action. Registered
   * instances not unsubscribed will be unsubscribed on
   * `ngOnDestroy()`.
   * @param subscription Subscription object to register.
   * @returns The same input parameter for optional pipelining
   * purposes.
   */
  public newAsync(subscription: Subscription) {
    this.asyncActions.push(subscription);
    return subscription;
  }

  /**
   * Performs basic cleanup.
   *
   * ## Remarks
   *
   * 1- Should be called from descendant's `ngOnDestroy` overwrites with
   * "super".
   *
   * 2- Descendants can declare implementation of `OnDestroy` interface
   * and not to provide an actual one if not doing any more than 1.
   */
  ngOnDestroy(): void {
    // Clean up
    this.asyncActions.forEach((element) => {
      if (element && !element.closed) element.unsubscribe();
    });
  }
}
