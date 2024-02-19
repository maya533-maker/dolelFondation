import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { foundationGuard } from './foundation.guard';

describe('foundationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => foundationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
