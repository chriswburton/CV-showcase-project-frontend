import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService
  ) {}

  /**
   * This method will be called by Angular when any route that requires authentication is activated.
   * We will check whether the user is logged in to ensure we restrict access to genuine users.
   * @param route Info about the route being activated (supplied by Angular)
   * @param state Info about the current router state (supplied by Angular)
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.authService.checkAuthStatus(url);
  }
}
