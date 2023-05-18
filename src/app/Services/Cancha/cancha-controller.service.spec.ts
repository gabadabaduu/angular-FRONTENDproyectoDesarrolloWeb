import { TestBed } from '@angular/core/testing';

import { CanchaControllerService } from './cancha-controller.service';

describe('CanchaControllerService', () => {
  let service: CanchaControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanchaControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
