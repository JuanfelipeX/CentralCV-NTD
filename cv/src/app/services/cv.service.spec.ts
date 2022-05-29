import { TestBed } from '@angular/core/testing';

import { datosPersonalesService } from './cv.service';

describe('CvService', () => {
  let service: datosPersonalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(datosPersonalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
