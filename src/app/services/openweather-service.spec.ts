import { TestBed, inject } from '@angular/core/testing';

import { OpenweatherService } from './openweather.service';

describe('OpenweatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenweatherService]
    });
  });

  it('should be created', inject([OpenweatherService], (service: OpenweatherService) => {
    expect(service).toBeTruthy();
  }));
});
