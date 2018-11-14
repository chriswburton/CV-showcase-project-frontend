import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * We'll often need to take action based on whether we are logged into our app.
   * This property will allows to store our logged in status.
   */
  private isAuthenticated = false;

  /**
   * Our user may attempt to access a part of the app within being logged in.
   * We'll use this property to store the URL we should redirect to after requiring that they log in.
   */
  private redirectUrl = 'dashboard';

  constructor(
    private router: Router
  ) {}

  /**
   * simple 'getter' for our 'isAuthenticated' property
   */
  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }

  /**
   * This method checks whether a user is logged in.
   * If they are not, it will store the current url then perform a redirect to login (on the empty route '').
   * @param url The current route that the user is on (To be stored and used for re-direction if authentication is required)
   * @return A simple true/false that denotes whether the user is currently logged in
   */
  checkAuthStatus(url: string): boolean {
    if (this.getAuthenticationStatus()) {
      // user is logged in
      return true;
    }

    // Store the attempted URL for redirecting after successful authentication
    this.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigateByUrl('log-in');
    return false;
  }

  /**
   * We can use this method once a user has provided correct credentials and is ready to access the app.
   * We'll update our isLoggedIn property and perform a redirect
   */
  authenticate() {
    this.isAuthenticated = true;
    this.router.navigateByUrl('dashboard');
  }
}
