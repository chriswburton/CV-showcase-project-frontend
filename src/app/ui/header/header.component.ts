import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages = [
    { label: 'Dashboard', route: '' },
    { label: 'My Applications', route: 'applications' },
    { label: 'Log Out', route: 'log-out' }
  ];

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
  }

}
