import { OnDestroy } from '@angular/core';
import { observable, Observable, of, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SubscriptionCollection } from './subscription-collection';

class SupposedClass extends SubscriptionCollection implements OnDestroy {
  constructor() {
    super();
  }

  createNewAsync(dummyValue: Observable<number>): Subscription {
    return this.newAsync(dummyValue.subscribe());
  }

  registered(): number {
    return this.asyncActions.length;
  }
}

describe('SubscriptionCollection', () => {
  it('should create an instance', () => {
    expect(new SupposedClass()).toBeTruthy();
  });

  it('Should register new async', () => {
    const obj = new SupposedClass();
    let magicNumber = 0;
    const obs: Observable<number> = of(17).pipe(tap(v => (magicNumber = v)));
    obj.createNewAsync(obs);
    expect(obj.registered()).toBe(1);
    expect(magicNumber).toBe(17);
  });
});
