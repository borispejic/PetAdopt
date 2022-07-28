import { TestBed } from '@angular/core/testing';

import { PetAdoptService } from './pet-adopt.service';

describe('PetAdoptService', () => {
  let service: PetAdoptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetAdoptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
