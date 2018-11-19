import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-log-out',
  template: ''
})
export class LogOutComponent implements OnInit {

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logOut();
  }

}
