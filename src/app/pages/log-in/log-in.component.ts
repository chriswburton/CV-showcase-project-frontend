import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  /**
   * Our copyright notice states the current year and should always be up-to-date, so is calculated in this property.
   */
  copyrightYear = new Date().getFullYear();

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) { }

  /**
   * Before showing the Log In page, we'll ensure we aren't already logged in.
   * If we are logged in, we'll perform a redirect.
   */
  ngOnInit() {
    // are we already logged in?
    if (this.authService.getAuthenticationStatus()) {
      this.router.navigateByUrl('dashboard');
    }
  }

  /**
   * This method can be called when user has supplied their credentials and is ready to authenticate with the server
   * We'll dispatch an action to achieve this, which will reach out to the backend via our effects
   */
  login() {
    // @TODO Connect to backend with validation
    this.authService.authenticate();
  }

}
