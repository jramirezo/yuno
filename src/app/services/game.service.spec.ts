import { TestBed } from '@angular/core/testing';

import { JuegoService } from './game.service';

describe('JuegoService', () => {
  let service: JuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
