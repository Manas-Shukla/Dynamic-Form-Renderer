import { TestBed } from '@angular/core/testing';

import { JSONFormService } from './jsonform.service';

describe('JSONFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSONFormService = TestBed.get(JSONFormService);
    expect(service).toBeTruthy();
  });
});
