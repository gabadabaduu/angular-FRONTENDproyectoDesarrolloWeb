import { TestBed } from '@angular/core/testing';

import { ReservaControllerService } from './reserva-controller.service';

describe('ReservaControllerService', () => {
  let service: ReservaControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
