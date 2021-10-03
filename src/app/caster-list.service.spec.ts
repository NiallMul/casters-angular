import { TestBed } from '@angular/core/testing';

import { CasterListService } from './caster-list.service';

describe('CasterListService', () => {
  let service: CasterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
