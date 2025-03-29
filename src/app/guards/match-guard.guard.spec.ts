import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { matchGuardGuard } from './match-guard.guard';

describe('matchGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => matchGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
