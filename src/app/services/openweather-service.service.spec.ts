import { TestBed, inject } from '@angular/core/testing';

import { OpenweatherServiceService } from './openweather-service.service';

describe('OpenweatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenweatherServiceService]
    });
  });

  it('should be created', inject([OpenweatherServiceService], (service: OpenweatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
