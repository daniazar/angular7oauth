import { TestBed, async, inject } from '@angular/core/testing';

import { F5Guard } from './f5.guard';

describe('F5Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [F5Guard]
    });
  });

  it('should ...', inject([F5Guard], (guard: F5Guard) => {
    expect(guard).toBeTruthy();
  }));
});
