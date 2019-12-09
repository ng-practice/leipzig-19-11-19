import { TestBed, async, inject } from '@angular/core/testing';

import { SureGuard } from './sure.guard';

describe('SureGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SureGuard]
    });
  });

  it('should ...', inject([SureGuard], (guard: SureGuard) => {
    expect(guard).toBeTruthy();
  }));
});
