import { TestBed } from '@angular/core/testing';

import { EchartService } from './echart.service';

describe('EchartService', () => {
  let service: EchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
