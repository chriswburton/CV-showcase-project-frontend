import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../services/auth.service';
import {Router, RouterStateSnapshot} from '@angular/router';
import {RouterStub} from '../test.stubs';

describe('AuthGuard', () => {
  let service: AuthService;
  let mockRouterSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        AuthService,
        { provide: Router, useClass: RouterStub }
      ]
    });
    service = TestBed.get(AuthService);
    mockRouterSnapshot = ({ url: 'mock-value' } as RouterStateSnapshot);
  });

  it('should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should block access when user IS NOT authenticated', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard.canActivate(null, mockRouterSnapshot)).toEqual(false);
  }));

  it('should allow access when user IS authenticated', inject([AuthGuard], (guard: AuthGuard) => {
    service.authenticate();
    expect(guard.canActivate(null, mockRouterSnapshot)).toEqual(true);
  }));
});
