import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import {RouterStub} from '../test.stubs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        { provide: Router, useClass: RouterStub }
      ]
    });
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAuthenticationStatus should return an initial value of "false"', () => {
    expect(service.getAuthenticationStatus()).toEqual(false);
  });

  it('#checkAuthStatus @return should always be consistent with "isAuthenticated" property', () => {
    expect(service.checkAuthStatus('mock-value')).toEqual(service.getAuthenticationStatus());
    // we'll now 'authenticate' and re-run this test
    service.authenticate();
    expect(service.checkAuthStatus('mock-value')).toEqual(service.getAuthenticationStatus());
  });
});
