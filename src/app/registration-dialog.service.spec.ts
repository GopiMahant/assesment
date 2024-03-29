import { TestBed } from '@angular/core/testing';

import { RegistrationDialogService } from './registration-dialog.service';

describe('RegistrationDialogService', () => {
  let service: RegistrationDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
