import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activeUser: UserModel;

  constructor(
    private readonly us: UserService
  ) { }

  ngOnInit() {
    this.activeUser = this.us.getActiveUser();
  }

}
