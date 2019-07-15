import { TestBed } from '@angular/core/testing';

import { MakeFormService } from './make-form.service';

describe('MakeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeFormService = TestBed.get(MakeFormService);
    expect(service).toBeTruthy();
  });
});
